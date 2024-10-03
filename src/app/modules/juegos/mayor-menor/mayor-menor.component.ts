import { Component } from '@angular/core';
import { apiService } from '../../../services/apis.service';
import Swal from 'sweetalert2';
import { PuntajesService } from '../../../services/resultados.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-mayor-menor',
  standalone: false,
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.scss'
})
export class MayorMenorComponent {
  cartas: any[] = [];
  cartaActual: any = null;
  puntaje: number = 0;
  vidas: number = 3; // Nueva variable para las vidas
  juegoTerminado: boolean = false;
  mensaje: string = '';
  cargando: boolean = false;
  usuario: string | null = null; // Para guardar el usuario logueado

  constructor(
    private apiService: apiService,
    private scoreService: PuntajesService, // Servicio para guardar puntajes
    private authService: AuthenticationService // Servicio de autenticación
  ) {}

  ngOnInit() {
    this.iniciarJuego();
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.usuario = user.email; // Guardar el email del usuario logueado
      }
    });
  }

  iniciarJuego(): void {
    this.puntaje = 0;
    this.vidas = 3; // Reiniciar las vidas al comenzar
    this.juegoTerminado = false;
    this.mensaje = '';
    this.cargando = true;
    this.obtenerCartas();
  }

  obtenerCartas(): void {
    this.apiService.obtenerCartas().subscribe(
      (data) => {
        this.cartas = data.cards;
        this.cartaActual = this.cartas.shift(); // Elimina la primera carta de ese array y la asigna a la variable
        this.cargando = false;
      },
      (error) => {
        console.error('Error al obtener las cartas:', error);
        this.mensaje = 'Error al obtener las cartas';
        this.cargando = false;
      }
    );
  }

  adivinarMayor(): void {
    this.cargando = true;
    const siguienteCarta = this.cartas.shift();
    if (this.convertirValor(this.cartaActual.value) < this.convertirValor(siguienteCarta.value)) {
      this.puntaje++;
      this.mensaje = `Correcto, ${siguienteCarta.value} es mayor que ${this.cartaActual.value}`;
    } else if (this.convertirValor(this.cartaActual.value) === this.convertirValor(siguienteCarta.value)) {
      this.mensaje = `EMPATE, ${siguienteCarta.value} tiene el mismo valor que ${this.cartaActual.value}`;
    } else {
      this.vidas--; // Restar una vida si se equivoca
      this.mensaje = `Incorrecto, ${siguienteCarta.value} no es mayor que ${this.cartaActual.value}. Vidas restantes: ${this.vidas}`;
      if (this.vidas === 0) {
        this.terminarJuego();
        return;
      }
    }
    this.actualizarJuego(siguienteCarta);
    this.cargando = false;
  }

  adivinarMenor(): void {
    this.cargando = true;
    const siguienteCarta = this.cartas.shift();
    if (this.convertirValor(this.cartaActual.value) > this.convertirValor(siguienteCarta.value)) {
      this.puntaje++;
      this.mensaje = `Correcto, ${siguienteCarta.value} es menor que ${this.cartaActual.value}. Vidas restantes: ${this.vidas}`;
    } else if (this.convertirValor(this.cartaActual.value) === this.convertirValor(siguienteCarta.value)) {
      this.mensaje = `EMPATE, ${siguienteCarta.value} tiene el mismo valor que ${this.cartaActual.value} . Vidas restantes: ${this.vidas}`;
    } else {
      this.vidas--; // Restar una vida si se equivoca
      this.mensaje = `Incorrecto, ${siguienteCarta.value} no es menor que ${this.cartaActual.value}. Vidas restantes: ${this.vidas}`;
      if (this.vidas === 0) {
        this.terminarJuego();
        return;
      }
    }
    this.actualizarJuego(siguienteCarta);
    this.cargando = false;
  }

  convertirValor(valor: string): number {
    if (valor === 'ACE') return 1;
    if (valor === 'JACK') return 11;
    if (valor === 'QUEEN') return 12;
    if (valor === 'KING') return 13;
    return parseInt(valor, 10);
  }

  actualizarJuego(siguienteCarta: any): void {
    if (!this.juegoTerminado) {
      this.cartaActual = siguienteCarta;
      if (this.cartas.length === 0) {
        this.mensaje = '¡Te has quedado sin cartas!';
        this.terminarJuego();
      }
    }
  }

  terminarJuego(): void {
    this.juegoTerminado = true;
    this.mensaje += ` El juego ha terminado. Puntuación final: ${this.puntaje}`;
    
    if (this.usuario) {
      // Guardar el puntaje con el usuario logueado
      this.scoreService.savePuntaje(this.puntaje, this.usuario, 'Mayor o Menor');
      Swal.fire({
        title: 'Juego terminado',
        text: `Tu puntaje final es: ${this.puntaje}`,
        icon: 'success'
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo guardar el puntaje. Debes estar logueado.',
        icon: 'error'
      });
    }
  }
}