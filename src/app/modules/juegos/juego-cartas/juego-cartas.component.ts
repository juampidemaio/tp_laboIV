import { Component } from '@angular/core';
import { apiService } from '../../../services/apis.service';

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


  constructor(private apiService: apiService) {}

  ngOnInit() {
    this.iniciarJuego()
  }

  iniciarJuego(): void {
    this.apiService.obtenerCartas().subscribe((data) => {
      this.cartas = data.cards.slice(0, 20).map((carta: any) => ({ ...carta, volteada: false }));
      this.rondaActual = 1;
      this.secuencia = [];
      this.mensaje = ''; 
      this.juegoIniciado = false;
    });
  }
  
  empezarRonda(): void {
    this.mostrandoSecuencia = true;
    this.seleccionUsuario = [];
    this.juegoIniciado = true; 
  
    
    let nuevaCarta: number;
    if (this.rondaActual === 1) {
      nuevaCarta = Math.floor(Math.random() * this.cartas.length);  
    } 
    else 
    {
      do 
      {
        nuevaCarta = Math.floor(Math.random() * this.cartas.length);
      } 
      while (this.secuencia.includes(nuevaCarta));
    }
    this.secuencia.push(nuevaCarta);  
  
    this.mostrarSecuencia();
  }
  

  async mostrarSecuencia(): Promise<void> {
    this.mostrandoSecuencia = true; 
    for (let i = 0; i < this.secuencia.length; i++) {
        this.voltearCarta(this.secuencia[i], true); 
        await this.delay(1500); 
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
        this.mensaje = '¡Te has equivocado! Reiniciando el juego...';
        this.resetearJuego();
        return;
      }
    }

    this.rondaActual++;
    this.mensaje = `¡Correcto! Iniciando ronda ${this.rondaActual}`;
    await this.delay(1500); 
    this.empezarRonda(); 
  }

  resetearJuego(): void {
    this.rondaActual = 1;
    this.secuencia = [];
    this.seleccionUsuario = [];
    
    this.cartas.forEach(carta => carta.volteada = false);
    

    setTimeout(() => {
      this.iniciarJuego();
    }, 2000); 
  }
  
}
