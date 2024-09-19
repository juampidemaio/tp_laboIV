import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, User } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(private auth: Auth, private firestore: Firestore) { }

  //inicio de sesion
  login(email: string, password: string): Promise<User | null> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        this.userSubject.next(res.user);
        this.logLogin(email); 
        return res.user;
      });
  }

  // Cerrar sesión
  logout(): Promise<void> {
    return signOut(this.auth).then(() => {
      this.userSubject.next(null); 
    });
  }

  // Registrar un nuevo usuario
  register(email: string, password: string): Promise<User | null> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        this.userSubject.next(res.user); 
        return res.user;
      });
  }

  // Obtener el usuario actual como observable
  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  // Método para guardar el login en la base de datos
  private logLogin(email: string): void {
    const col = collection(this.firestore, 'logins');
    addDoc(col, { fecha: new Date(), user: email })
      .then(() => console.log('Login registrado correctamente'))
      .catch((error) => console.log('Error al registrar el login: ', error));
  }
}
