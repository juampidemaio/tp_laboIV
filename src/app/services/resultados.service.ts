import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, onSnapshot, orderBy, query, where } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntajesService {
  private puntajesSubject = new BehaviorSubject<any[]>([]);

  constructor(private firestore: Firestore) {}

  // Obtener puntajes como observable
  getPuntajes(): Observable<any[]> {
    return this.puntajesSubject.asObservable();
  }

  // Cargar puntajes de Firestore por nombre de juego
  loadPuntajesByGame(game: string): void {
    const puntajesRef = collection(this.firestore, 'puntajes');
    const q = query(puntajesRef, where('game', '==', game)); // Solo filtras por el juego, sin orden
  
    onSnapshot(q, (querySnapshot) => {
      const puntajes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      this.puntajesSubject.next(puntajes); // Actualiza el BehaviorSubject con los puntajes filtrados
    }, error => {
      console.error('Error al obtener puntajes:', error);
    });
  }
  

  // Guardar un nuevo puntaje
  savePuntaje(puntaje: number, user: string, game: string): void {
    const puntajesRef = collection(this.firestore, 'puntajes');
    addDoc(puntajesRef, {
      puntaje: puntaje,
      user: user,
      game: game, // Guardamos el nombre del juego
      timestamp: new Date() // Usamos la fecha actual como "timestamp"
    });
  }
}
