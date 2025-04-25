import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [RouterLink, CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  nombre: string = 'Usuario'; // si tienes un nombre real, ajusta esto
  correo: string = '';
  foto: string = '';

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.correo = localStorage.getItem('correo') || '';
    this.nombre = localStorage.getItem('nombre') || 'Usuario';
    this.foto = localStorage.getItem('foto') || ''; // si guardas foto también

    console.log('📦 Datos cargados desde localStorage:');
    console.log('Correo:', this.correo);
    console.log('Nombre:', this.nombre);
    console.log('Foto:', this.foto);
  }

}
