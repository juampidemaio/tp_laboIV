import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class apiService {
  private imagenesApiUrl = 'https://api.pexels.com/v1/search?query=';
  private apiKey = '6ojPZ1Vpb0TxNCMimdqvCdGibmFuD9J0xCiS9wNtfyVLPqtfooBcqJ34';  // Key de la API
  private deckApiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';

  private preguntas: any[] = [
    {
      "pregunta": "¿Qué animal es conocido como el rey de la selva?",
      "correct_answer": "León",
      "incorrect_answers": ["Tigre", "Elefante", "Jirafa"],
      "imagen_clave": "lion"
    },
    {
      "pregunta": "¿Cuál es el mamífero terrestre más grande?",
      "correct_answer": "Elefante",
      "incorrect_answers": ["Rinoceronte", "Hipopótamo", "Jirafa"],
      "imagen_clave": "elephant"
    },
    {
      "pregunta": "¿Qué animal tiene una trompa?",
      "correct_answer": "Elefante",
      "incorrect_answers": ["Jirafa", "Tigre", "León"],
      "imagen_clave": "elephant"
    },
    {
      "pregunta": "¿Qué ave es conocida por su capacidad de imitar sonidos?",
      "correct_answer": "Loro",
      "incorrect_answers": ["Gaviota", "Pingüino", "Avestruz"],
      "imagen_clave": "parrot"
    },
    {
      "pregunta": "¿Qué animal es famoso por su colorido plumaje?",
      "correct_answer": "Pavo real",
      "incorrect_answers": ["Gallo", "Gaviota", "Pájaro carpintero"],
      "imagen_clave": "peacock"
    },
    {
      "pregunta": "¿Qué animal vive en una colmena?",
      "correct_answer": "Abeja",
      "incorrect_answers": ["Mariposa", "Escarabajo", "Mosquito"],
      "imagen_clave": "bee"
    },
    {
      "pregunta": "¿Cuál es el pez más grande del océano?",
      "correct_answer": "Tiburón ballena",
      "incorrect_answers": ["Tiburón tigre", "Delfín", "Mero"],
      "imagen_clave": "whale_shark"
    },
    {
      "pregunta": "¿Qué animal es conocido por su caparazón duro?",
      "correct_answer": "Tortuga",
      "incorrect_answers": ["Rana", "Lagarto", "Cocodrilo"],
      "imagen_clave": "turtle"
    }
  ];
  

  constructor(private http: HttpClient) { }

  obtenerImagenes(tema: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.apiKey
    });
    return this.http.get(`${this.imagenesApiUrl}${tema}`, { headers });
  }

  obtenerPreguntas(): Observable<any> {
    return of(this.preguntas);  // Retorna las preguntas desde el array
  }

  obtenerCartas(): Observable<any> {
    return this.http.get<any>(this.deckApiUrl);
  }
}
