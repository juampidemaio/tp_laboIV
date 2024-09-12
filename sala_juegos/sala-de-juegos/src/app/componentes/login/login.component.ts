import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Usuario } from '../../clases/usuario';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
  
})
export class LoginComponent {

  nombreIngresado: string = 'carlos';
  claveIngresada: number = 123;
  usuario: Usuario = new Usuario(this.nombreIngresado, this.claveIngresada); 
  errorLogin: boolean = false;

  constructor(private router: Router) { }

  goTo(path: string) {
    if (this.usuario.nombre === this.nombreIngresado && this.usuario.clave === this.claveIngresada) {
     {
        this.router.navigate([path]); 
      };
      
    } else {
      this.errorLogin = true;
    }
  }
}
