import { Component, OnInit } from '@angular/core';
import { PuntajesService } from '../../services/resultados.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-puntajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './puntajes.component.html',
  styleUrl: './puntajes.component.scss'
})
export class PuntajesComponent implements OnInit {
  puntajes: any[] = [];
  gameName: string | undefined; // Nombre del juego actual

  constructor(private puntajesService: PuntajesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.gameName = params['game'];
      this.loadPuntajes();
    });
  }

  // Método para cargar puntajes del juego
  loadPuntajes(): void {
    if (this.gameName) {
      this.puntajesService.loadPuntajesByGame(this.gameName);
      this.puntajesService.getPuntajes().subscribe((puntajes) => {
        // Comprueba que 'timestamp' esté definido y conviértelo a Date
        this.puntajes = puntajes.map(p => ({
          ...p,
          fecha: p.timestamp ? p.timestamp.toDate() : new Date() // Convertir Firestore Timestamp a Date
        }));
      });
    }
  }
}