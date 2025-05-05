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
  rol: string = '1';

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.correo = localStorage.getItem('correo') || '';
    this.nombre = localStorage.getItem('nombre') || 'Usuario';
    this.foto = localStorage.getItem('foto') || ''; // si guardas foto también
    this.rol = localStorage.getItem('id_rol') || '1'; // Ajusta el valor por defecto según tu lógica

    this.apiService.getImagenUsuario(localStorage.getItem('id_usuario')).subscribe(
      (data: any) => {
        console.log('Imagen de usuario:', data);
        this.foto = data.imagen.nombre_imagen_usuario || ''; // Ajusta según la estructura de tu respuesta
        localStorage.setItem('foto', this.foto); // Guarda la foto en localStorage si es necesario
      }
    );

    console.log('📦 Datos cargados desde localStorage:');
    console.log('Correo:', this.correo);
    console.log('Nombre:', this.nombre);
    console.log('Foto:', this.foto);
  }

}
