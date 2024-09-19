import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  isLoggedIn: boolean = false;  
  user: User | null = null;
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.authService.getUser().subscribe((user: User | null) => {
      this.isLoggedIn = !!user;  
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }


  goTo(path: string) {
    this.router.navigate([`/juegos/${path}`]); 
  }
}
