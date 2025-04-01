import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Actividad } from '../../models/actividad';
import { TipoActividad } from '../../models/tipo-actividad';
import { Destinos } from '../../models/destinos';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-actividades',
  imports: [CommonModule, NgxPaginationModule],
  providers: [ApiService],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
  p: number = 1;

  actividades: Actividad[] = [];
  

  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.apiService.getActividadesJoin().subscribe((response: any) => {
      console.log("Datos de la API:", response);
      this.actividades = response.actividades;
    });

    
  }
}
