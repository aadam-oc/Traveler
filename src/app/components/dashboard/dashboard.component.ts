import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { GestionUsuariosComponent } from '../gestion-usuarios/gestion-usuarios.component';
import { GestionActividadesComponent } from '../gestion-actividades/gestion-actividades.component';
import { GestionAlojamientosComponent } from '../gestion-alojamientos/gestion-alojamientos.component';
import { GestionTiposActividadesComponent } from '../gestion-tipos-actividades/gestion-tipos-actividades.component';
import { GestionRolesComponent } from '../gestion-roles/gestion-roles.component';
import { GestionDestinosComponent } from '../gestion-destinos/gestion-destinos.component';
import { GestionContactoComponent } from '../gestion-contacto/gestion-contacto.component';


@Component({
  selector: 'app-dashboard',
  imports: [ GestionDestinosComponent, CommonModule, GestionUsuariosComponent, GestionActividadesComponent, GestionAlojamientosComponent, GestionTiposActividadesComponent, GestionRolesComponent, GestionContactoComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router, private apiService: ApiService) { }

}
