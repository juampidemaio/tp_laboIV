import { Router,RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service'; // Asegúrate de que la ruta es correcta
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean = false; 

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    // Suscribirse al observable para saber si el usuario está logueado o no
    this.authService.getUser().subscribe((user: User | null) => {
      this.isLoggedIn = !!user;  // Si hay usuario, está logueado (true); si no, false
    });
  }

  confirmLogout() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se cerrará tu sesión",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.logout();  
      }
    });
  }

  logout() {
    this.authService.logout().then(() => {
      Swal.fire(
        '¡Cierre de sesión exitoso!',
        'Has cerrado sesión correctamente.',
        'success'
      ).then(() => {
        this.goTo('/login');  
      });
    });
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}