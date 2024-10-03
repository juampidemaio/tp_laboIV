import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { ChatComponent } from "../chat/chat.component";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, ChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false;  
  user: User | null = null;
  showChat = false;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.authService.getUser().subscribe((user: User | null) => {
      this.isLoggedIn = !!user;  
      this.user = user; // Puede ser null o el usuario logueado
    });
  }

  toggleChat() {
    if (this.isLoggedIn) {
      this.showChat = !this.showChat; // Si está logueado, alternar el estado de showChat
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Inicia sesión',
        text: 'Debes iniciar sesión para usar el chat.',
        timer: 3000,
        showConfirmButton: false
      });
    }
  }

  goTo(path: string) {
    this.router.navigate([`/juegos/${path}`]); 
  }

  llevarJuego(game: string): void {
    this.router.navigate(['puntaje'], { queryParams: { game } });
  }
}