import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class apiService {
  private apiUrl = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple';
  private deckApiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';

  constructor(private http: HttpClient) { }

  obtenerPreguntas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerCartas(): Observable<any> {
    return this.http.get<any>(this.deckApiUrl);
  }
}
// private apiUrl = 'https://api.pexels.com/v1/search?query=';
//   private apiKey = '6ojPZ1Vpb0TxNCMimdqvCdGibmFuD9J0xCiS9wNtfyVLPqtfooBcqJ34';  //key de la api
//   private preguntasUrl = './preguntas.json';  // Ruta al archivo JSON


//  // Método para obtener imágenes
//  obtenerImagen(tema: string): Observable<any> {
//   return this.http.get(`${this.apiUrl}${tema}`, {
//     headers: { 'Authorization': this.apiKey }
//   });
// }

// obtenerPreguntas(): Observable<any> {
//   return this.http.get(this.preguntasUrl);  // Carga el archivo JSON
// } 
