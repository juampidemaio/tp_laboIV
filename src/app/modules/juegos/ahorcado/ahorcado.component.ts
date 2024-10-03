import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { PuntajesService } from '../../../services/resultados.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-ahorcado',
  standalone: false,
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.scss'
})
export class AhorcadoComponent {
  abecedario: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  private palabras: string[] = ['ANGULAR', 'REACT', 'VUE', 'JAVASCRIPT', 'TYPESCRIPT'];
  private palabrasUsadas: Set<string> = new Set();

  palabraSeleccionada: string = '';
  palabraMostrada: string[] = [];
  puntaje: number = 0;
  letrasUsadas: string[] = [];
  intentosFallidos: number = 0;
  maxIntentos: number = 6;
  juegoTerminado: boolean = false;
  ganaste: boolean = false;

  imagenesAhorcado: string[] = [
    'ahorcado0.png',
    'ahorcado1.png',
    'ahorcado2.png',
    'ahorcado3.png',
    'ahorcado4.png',
    'ahorcado5.png',
    'ahorcado6.png'
  ];
  imagenActual: string = this.imagenesAhorcado[0];
  usuario: string | null = null; // Variable para almacenar el usuario logueado

  constructor(private puntajesService: PuntajesService, private authService: AuthenticationService) { } // Inyectar el servicio

  ngOnInit(): void {
    this.inicializarJuego();
    this.puntaje = 0;

    // Obtener el usuario logueado
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.usuario = user.email; // Guardar el email del usuario logueado
      }
    });
  }

  inicializarJuego(): void {
    if (this.palabrasUsadas.size === this.palabras.length) {
      Swal.fire({
        icon: 'success',
        title: '¡Juego Completado!',
        text: 'Usaste todas las palabras, sos muy bueno',
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    this.palabraSeleccionada = this.obtenerPalabraAleatoria();
    this.palabraMostrada = Array(this.palabraSeleccionada.length).fill('_');
    this.letrasUsadas = [];
    this.intentosFallidos = 0;
    this.imagenActual = this.imagenesAhorcado[0];
    this.juegoTerminado = false;
    this.ganaste = false;
  }

  private obtenerPalabraAleatoria(): string {
    let palabra: string = this.palabras[Math.floor(Math.random() * this.palabras.length)];

    while (this.palabrasUsadas.has(palabra)) {
      palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    }

    this.palabrasUsadas.add(palabra);
    return palabra;
  }

  manejarClickLetra(letra: string): void {
    if (this.letrasUsadas.includes(letra) || this.juegoTerminado) {
      return;
    }

    this.letrasUsadas.push(letra);

    if (this.palabraSeleccionada.includes(letra)) {
      for (let i = 0; i < this.palabraSeleccionada.length; i++) {
        if (this.palabraSeleccionada[i] === letra) {
          this.palabraMostrada[i] = letra;
        }
      }

      // Verifica si el jugador ha ganado
      if (!this.palabraMostrada.includes('_')) {
        this.ganaste = true;
        this.puntaje++;
        this.juegoTerminado = true;

        // Muestra mensaje de victoria
        Swal.fire({
          icon: 'success',
          title: '¡Ganaste!',
          text: `Tu puntaje es: ${this.puntaje}`,
          timer: 2000,
          showConfirmButton: false
        });

        // Guarda el puntaje solo cuando el juego termina
        this.guardarPuntaje();
      }
    } else {
      this.intentosFallidos++;
      this.imagenActual = this.imagenesAhorcado[this.intentosFallidos];

      if (this.intentosFallidos >= this.maxIntentos) {
        this.juegoTerminado = true;
        // Muestra mensaje de derrota
        Swal.fire({
          icon: 'error',
          title: 'Perdiste',
          text: `La palabra era: ${this.palabraSeleccionada}. Tu puntaje final es: ${this.puntaje}`,
          timer: 2000,
          showConfirmButton: false
        });

        // Guarda el puntaje solo cuando el juego termina
        this.guardarPuntaje();
      }
    }
  }

  guardarPuntaje(): void {
    if (this.usuario) {
      this.puntajesService.savePuntaje(this.puntaje, this.usuario, 'Ahorcado'); // Usa el usuario logueado
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo guardar el puntaje. Debes estar logueado.',
      });
    }
  }

  reiniciarJuego(): void {
    // Solo guarda el puntaje si el juego ha terminado
    if (this.juegoTerminado) {
      this.guardarPuntaje();
    }
    this.inicializarJuego();
  }
}