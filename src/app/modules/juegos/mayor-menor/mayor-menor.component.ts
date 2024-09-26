import { Component } from '@angular/core';
import { apiService } from '../../../services/apis.service';

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
  juegoTerminado: boolean = false;
  mensaje: string = '';
  cargando: boolean = false;

  constructor(private apiService: apiService) {}

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego(): void {
    this.puntaje = 0;
    this.juegoTerminado = false;
    this.mensaje = '';
    this.cargando = true;
    this.obtenerCartas();
  }

  
  obtenerCartas(): void {
    this.apiService.obtenerCartas().subscribe(
      (data) => {
        this.cartas = data.cards;
        this.cartaActual = this.cartas.shift();
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
    if (this.convertirValor(this.cartaActual.value) < this.convertirValor(siguienteCarta.value)) 
    {
      this.puntaje++;
      this.mensaje = `Correcto, ${siguienteCarta.value} es mayor que ${this.cartaActual.value}`;
    } 
    else if (this.convertirValor(this.cartaActual.value) === this.convertirValor(siguienteCarta.value)) 
    {
      this.mensaje = `EMPATE, ${siguienteCarta.value} tiene el mismo valor que ${this.cartaActual.value}`;
    } 
    else 
    {
      this.mensaje = `Incorrecto, ${siguienteCarta.value} no es mayor que ${this.cartaActual.value}`;
      this.terminarJuego();
    }
    this.actualizarJuego(siguienteCarta);
    this.cargando = false;
  }

  adivinarMenor(): void {
    this.cargando = true;
    const siguienteCarta = this.cartas.shift();
    if (this.convertirValor(this.cartaActual.value) > this.convertirValor(siguienteCarta.value)) 
    {
      this.puntaje++;
      this.mensaje = `Correcto, ${siguienteCarta.value} es menor que ${this.cartaActual.value}`;
    } 
    else if (this.convertirValor(this.cartaActual.value) === this.convertirValor(siguienteCarta.value)) 
    {
      this.mensaje = `EMPATE, ${siguienteCarta.value} tiene el mismo valor que ${this.cartaActual.value}`;
    } else 
    {
      this.mensaje = `Incorrecto, ${siguienteCarta.value} no es menor que ${this.cartaActual.value}`;
      this.terminarJuego();
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
        this.terminarJuego();
      }
    }
  }

  terminarJuego(): void {
    this.juegoTerminado = true;
    this.mensaje += ` El juego ha terminado. Puntuación final: ${this.puntaje}`;
  }
}