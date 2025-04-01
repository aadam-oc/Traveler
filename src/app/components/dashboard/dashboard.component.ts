import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { GestionUsuariosComponent } from '../gestion-usuarios/gestion-usuarios.component';
import { GestionActividadesComponent } from '../gestion-actividades/gestion-actividades.component';
import { GestionAlojamientosComponent } from '../gestion-alojamientos/gestion-alojamientos.component';


@Component({
  selector: 'app-dashboard',
  imports: [ CommonModule, GestionUsuariosComponent, GestionActividadesComponent, GestionAlojamientosComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router, private apiService: ApiService) { }

}
