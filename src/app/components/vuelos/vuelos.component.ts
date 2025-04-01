import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { CommonModule } from '@angular/common';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-vuelos',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css'],
  providers: [OpenaiService]
})
export class VuelosComponent {

  haiku: string = '';
  errorMessage: string = '';

  constructor(private openaiService: OpenaiService) { }

  getHaiku() {
    this.openaiService.generateHaiku("Write a haiku about the ocean.")
      .pipe(
        tap(response => {
          this.haiku = response.choices[0].message.content;
          this.errorMessage = ''; // Limpia el mensaje de error si la solicitud es exitosa
        }),
        catchError(error => {
          console.error("Error:", error);
          if (error.status === 429) {
            this.errorMessage = 'Has excedido el límite de solicitudes. Por favor, inténtalo más tarde.';
          } else {
            this.errorMessage = 'Ocurrió un error al generar el Haiku.';
          }
          return of(null);
        })
      )
      .subscribe();
  }
}