import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { GestionUsuariosComponent } from '../gestion-usuarios/gestion-usuarios.component';


@Component({
  selector: 'app-dashboard',
  imports: [ CommonModule, GestionUsuariosComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router, private apiService: ApiService) { }



  logout() {
    localStorage.removeItem('authToken');  // Elimina el token de localStorage
    this.router.navigate(['/login']);  // Redirige a la página de login
  }
}
