import { Component } from '@angular/core';
import { apiService } from '../../../services/apis.service';
import { PuntajesService } from '../../../services/resultados.service';
import { AuthenticationService } from '../../../services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-juego-cartas',
  standalone: false,
  templateUrl: './juego-cartas.component.html',
  styleUrl: './juego-cartas.component.scss'
})
export class JuegoCartasComponent {
  cartas: any[] = [];
  secuencia: number[] = [];
  seleccionUsuario: number[] = [];
  rondaActual: number = 1;
  mostrandoSecuencia: boolean = false;
  mensaje: string = '';
  juegoIniciado: boolean = false;
  puntaje: number = 0;
  vidas: number = 3; // Agregamos la propiedad de vidas
  usuario: string | null = null;

  constructor(private apiService: apiService, private puntajesService: PuntajesService, private authService: AuthenticationService) {}

  ngOnInit() {
    this.iniciarJuego();
    // Obtener el usuario logueado
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.usuario = user.email; // Guardar el email del usuario logueado
      }
    });
  }

  iniciarJuego(): void {
    this.apiService.obtenerCartas().subscribe((data) => {
      this.cartas = data.cards.slice(0, 20).map((carta: any) => ({ ...carta, volteada: false }));
      this.rondaActual = 1;
      this.secuencia = [];
      this.seleccionUsuario = [];
      this.mensaje = ''; 
      this.vidas = 3; // Reiniciar las vidas
    });
  }

  empezarRonda(): void {
    if (this.cartas.length === 0 || this.vidas <= 0) {
      this.terminarJuego(); // Terminar el juego si se acabaron las cartas o vidas
      return;
    }

    this.mostrandoSecuencia = true;
    this.seleccionUsuario = [];
    this.juegoIniciado = true; // Cambiar el estado a iniciado
  
    let nuevaCarta: number;
    if (this.rondaActual === 1) {
      nuevaCarta = Math.floor(Math.random() * this.cartas.length);
    } else {
      do {
        nuevaCarta = Math.floor(Math.random() * this.cartas.length);
      } while (this.secuencia.includes(nuevaCarta));
    }
    this.secuencia.push(nuevaCarta);  
    this.mostrarSecuencia();
  }

  async mostrarSecuencia(): Promise<void> {
    this.mostrandoSecuencia = true; 
    for (let i = 0; i < this.secuencia.length; i++) {
      this.voltearCarta(this.secuencia[i], true); 
      await this.delay(1000); 
      this.voltearCarta(this.secuencia[i], false);
      await this.delay(500); 
    }
    this.mostrandoSecuencia = false;
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  voltearCarta(indice: number, mostrar: boolean): void {
    if (indice >= 0 && indice < this.cartas.length) {
      this.cartas[indice].volteada = mostrar;
    }
  }

  seleccionarCarta(indice: number): void {
    if (this.mostrandoSecuencia) return; 
    this.seleccionUsuario.push(indice);

    if (this.seleccionUsuario.length === this.secuencia.length) {
      this.verificarSeleccion();
    }
  }

  async verificarSeleccion(): Promise<void> {
    for (let i = 0; i < this.seleccionUsuario.length; i++) {
      if (this.seleccionUsuario[i] !== this.secuencia[i]) {
        this.vidas--; // Restar una vida si la selección es incorrecta
        this.mensaje = `¡Te has equivocado! Te quedan ${this.vidas} vidas.`;
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: this.mensaje,
        });

        if (this.vidas <= 0) {
          this.guardarPuntaje();
          this.resetearJuego();
        } else {
          this.resetearRonda(); // Reiniciar la ronda si todavía hay vidas
        }
        return;
      }
    }

    this.rondaActual++;
    this.puntaje++;
    this.mensaje = `¡Correcto! Iniciando ronda ${this.rondaActual}`;
    await this.delay(1500);
    this.empezarRonda();
  }

  resetearRonda(): void {
    this.seleccionUsuario = [];
    this.mensaje = ''; 
    this.empezarRonda(); // Reiniciar la ronda
  }

  resetearJuego(): void {
    this.puntaje = 0;
    this.cartas.forEach(carta => carta.volteada = false); 

    setTimeout(() => {
      this.juegoIniciado = false;
      this.iniciarJuego();
    }, 2000); 
  }

  guardarPuntaje(): void {
    if (this.usuario) {
      this.puntajesService.savePuntaje(this.puntaje, this.usuario, 'juego de cartas'); 
    } 
  }

  terminarJuego(): void {
    this.mensaje = 'Fin del juego. Te quedaste sin vidas o se acabaron las cartas.';
    Swal.fire({
      icon: 'info',
      title: 'Juego terminado',
      text: this.mensaje,
    }).then(() => {
      this.resetearJuego(); // Reiniciar juego después de que el usuario cierre el aviso
    });
  }
}