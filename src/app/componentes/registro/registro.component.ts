import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service'; // Usamos el servicio existente
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  nuevoEmail: string = '';
  nuevaClave: string = '';
  loggedUser: string = '';
  flagError: boolean = false;
  msjError: string = '';


  constructor(private authService: AuthenticationService, private router: Router) {}

 Register() {
  if (!this.nuevoEmail || !this.nuevaClave) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos incompletos',
      text: 'Por favor, completa todos los campos.',
      showConfirmButton: true,
    });
    return;
  }


  this.authService
    .register(this.nuevoEmail, this.nuevaClave)
    .then((res) => {
   

      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Te has registrado con éxito.',
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        this.router.navigate(['/home']);
      });
    })
    .catch((e) => {
      this.mensajeErrores(e);    
    });
}

mensajeErrores(e: any) {
  switch (e.code) {
    case 'auth/invalid-email':
      this.msjError = 'Email inválido';
      break;
    case 'auth/email-already-in-use':
      this.msjError = 'Este email ya está en uso';
      break;
    case 'auth/weak-password':
      this.msjError = 'La contraseña es muy débil. Debe tener al menos 6 caracteres.';
      break;
    case 'auth/missing-password':
      this.msjError = 'Se necesita una contraseña.';
      break;
    default:
      this.msjError = 'Error: ' + e.message;
      break;
  }

  Swal.fire({
    icon: 'error',
    title: 'Error en el registro',
    text: this.msjError,
    showConfirmButton: true,
  });
  console.log('Error en el registro: ' + e.code);
}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
