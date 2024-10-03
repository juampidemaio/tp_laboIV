import { Component } from '@angular/core';
import { apiService } from '../../../services/apis.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { PuntajesService } from '../../../services/resultados.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-preguntados',
  standalone: false,
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.scss'
})
export class PreguntadosComponent {
  preguntas: any[] = [];
  copiaPreguntas: any[] = []; 
  preguntaActual: any = null;
  opciones: string[] = [];
  imagenActual: string = '';
  puntaje: number = 0;
  juegoIniciado: boolean = false;
  primeraVez: boolean = true; 
  private preguntasSubscription: Subscription | undefined;
  usuario: string | null = null;
  indicePreguntaActual: number = 0;

  constructor(
    private apiService: apiService, 
    private puntajesService: PuntajesService, 
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    if (this.primeraVez) {
      this.inicializarJuego();
      this.primeraVez = false;
    } else {
      this.restartGame();
    }

    this.authService.getUser().subscribe(user => {
      if (user) {
        this.usuario = user.email;
      }
    });
  }

  inicializarJuego(): void {
    this.puntaje = 0;
    this.juegoIniciado = false;
    this.cargarPreguntas();
  }

  cargarPreguntas(): void {
    this.preguntasSubscription = this.apiService.obtenerPreguntas().subscribe((data: any) => {
      console.log('Preguntas cargadas:', data);
      this.preguntas = data;
      this.copiaPreguntas = [...data];
      this.juegoIniciado = true;
      this.imagenActual = '';
      if (this.preguntas.length > 0) {
        this.siguientePregunta();
      }
    });
  }

  siguientePregunta(): void {
    if (this.indicePreguntaActual < this.preguntas.length) {
      this.preguntaActual = this.preguntas[this.indicePreguntaActual]; 
      this.opciones = [...this.preguntaActual.incorrect_answers, this.preguntaActual.correct_answer];
      this.opciones = this.shuffleArray(this.opciones);
      this.cargarImagen(this.preguntaActual.imagen_clave);
      this.indicePreguntaActual++;
    } else {
      this.terminarJuego();
    }
  }

  cargarImagen(clave: string): void {
    console.log('Buscando imagen para el tema:', clave);
    this.apiService.obtenerImagenes(clave).subscribe((data: any) => {
      if (data.photos && data.photos.length > 0) {
        this.imagenActual = data.photos[0].src.medium;
      } else {
        this.imagenActual = '';
      }
    }, (error) => {
      console.error('Error al cargar imagen:', error);
      this.imagenActual = '';
    });
  }

  seleccionarRespuesta(opcion: string): void {
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

  terminarJuego(): void {
    const mensajeGuardado = this.guardarPuntaje();
    const mensajeFinal = `Tu puntaje final es: ${this.puntaje}. ${mensajeGuardado}`;
  
    Swal.fire({
      icon: 'info',
      title: 'Fin del juego',
      text: mensajeFinal,
      confirmButtonText: 'Reiniciar',
    }).then((result) => {
      if (result.isConfirmed) { 
        this.restartGame();
      } 
    });
  }
  
  guardarPuntaje(): string {
    if (this.usuario) {
      this.puntajesService.savePuntaje(this.puntaje, this.usuario, 'preguntados'); 
      return 'Tu puntaje ha sido guardado correctamente.';
    } else {
      return 'No se pudo guardar el puntaje. Debes estar logueado.';
    }
  }
  

  restartGame(): void {
    this.puntaje = 0;
    this.preguntaActual = null;
    this.opciones = [];
    this.imagenActual = '';
    this.juegoIniciado = false;
    this.indicePreguntaActual = 0;

    if (this.copiaPreguntas.length > 0) {
      this.preguntas = [...this.copiaPreguntas];
      this.siguientePregunta();
      this.juegoIniciado = true;
    } else {
      this.cargarPreguntas(); // Si no hay preguntas, volver a cargar
    }
  }

  
 
  shuffleArray(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }


  ngOnDestroy(): void {
    if (this.preguntasSubscription) {
      this.preguntasSubscription.unsubscribe();
    }
  }
}