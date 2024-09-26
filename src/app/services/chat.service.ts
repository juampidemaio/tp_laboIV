  import { Injectable } from '@angular/core';
  import { addDoc, collection, Firestore, onSnapshot, orderBy, query } from '@angular/fire/firestore';
  import { BehaviorSubject, Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class ChatService {

    private messagesSubject = new BehaviorSubject<any[]>([]);
    
    constructor(private firestore: Firestore) {
      this.loadMessages(); // Carga los mensajes al inicializar
    }
  
    // Obtener mensajes como observable
    getMessages(): Observable<any[]> {
      return this.messagesSubject.asObservable();
    }
  
    // Cargar mensajes de Firestore
    private loadMessages(): void {
      const messagesRef = collection(this.firestore, 'messages');
      const q = query(messagesRef, orderBy('timestamp'));
  
      onSnapshot(q, (querySnapshot) => {
        const messages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        this.messagesSubject.next(messages);
      });
    }
  
    // Enviar un mensaje
    sendMessage(message: string, user: string): void {
      const messagesRef = collection(this.firestore, 'messages');
      addDoc(messagesRef, {
        text: message,
        user: user,
        timestamp: new Date()
      });
    }
  }