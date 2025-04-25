import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FakeApiVuelosService } from '../../services/fake-api-vuelos.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-vuelos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css'],
  providers: [FakeApiVuelosService]
})
export class VuelosComponent implements OnInit {
  vuelos: any[] = [];

  constructor(private vuelosService: FakeApiVuelosService) {}

  ngOnInit(): void {
    this.vuelosService.getVuelos()
      .pipe(
        catchError(error => {
          console.error('Error al obtener los vuelos:', error);
          return of([]);
        })
      )
      .subscribe((data: any) => {
        this.vuelos = data;
      });
  }
}

