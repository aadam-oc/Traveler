import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Actividad } from '../../models/actividad';
import { TipoActividad } from '../../models/tipo-actividad';
import { Destinos } from '../../models/destinos';

@Component({
  selector: 'app-actividades',
  imports: [CommonModule],
  providers: [ApiService],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
  actividades: Actividad[] = [];
  

  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.apiService.getActividadesJoin().subscribe((response: any) => {
      console.log("Datos de la API:", response);
      this.actividades = response.actividades;
    });

    
  }
}
