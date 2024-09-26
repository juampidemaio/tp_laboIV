import { Component } from '@angular/core';
import { apiService } from '../../../services/apis.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntados',
  standalone: false,
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.scss'
})
export class PreguntadosComponent {
  preguntas: any[] = [];
  preguntaActual: any;
  opciones: string[] = [];
  respuestaSeleccionada: string | null = null;
  puntaje: number = 0;

  constructor(private preguntasService: apiService) {}

  ngOnInit(): void {
    this.cargarPreguntas();
  }

  cargarPreguntas(): void {
    this.preguntasService.obtenerPreguntas().subscribe((data: any) => {
      this.preguntas = data.results;
      this.siguientePregunta();
    });
  }

  siguientePregunta(): void {
    if (this.preguntas.length > 0) {
      this.preguntaActual = this.preguntas.shift();
      this.opciones = this.preguntaActual.incorrect_answers;
      this.opciones.push(this.preguntaActual.correct_answer);
      this.opciones = this.shuffleArray(this.opciones);
    } else {
      this.terminarJuego(); // Llamar a terminarJuego si no hay más preguntas
    }
  }
  
  terminarJuego(): void {
    Swal.fire({
      icon: 'info',
      title: 'Fin del juego',
      text: `Tu puntaje final es: ${this.puntaje}`,
      confirmButtonText: 'Reiniciar'
    }).then(() => {
      this.restartGame(); // Implementa un método para reiniciar el juego
    });
  }
  
  restartGame(): void {
    this.puntaje = 0;
    this.respuestaSeleccionada = null;
    this.cargarPreguntas(); // Recarga las preguntas
  }
  
  seleccionarRespuesta(opcion: string): void {
    this.respuestaSeleccionada = opcion;
    if (opcion === this.preguntaActual.correct_answer) {
      this.puntaje++;
      Swal.fire({
        icon: 'success',
        title: '¡Respuesta correcta!',
        timer: 1500,
        showConfirmButton: false
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: '¡Respuesta incorrecta!',
        timer: 1500,
        showConfirmButton: false
      });
    }
    this.siguientePregunta();
  }

  shuffleArray(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }
}