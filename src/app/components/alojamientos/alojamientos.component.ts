import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Alojamientos } from '../../models/alojamientos';
import { Destinos } from '../../models/destinos';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-alojamientos',
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent {
  p: number = 1;

  alojamientos : Alojamientos[] = [];
  destinos : Destinos[] = [];

  modalAbierto: boolean = false;
  alojamientoSeleccionado: any = null;
  imagenActual: number = 0;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getAlojamientosCompletos().subscribe(
      (data: any) => {
        this.alojamientos = data.alojamientos.map((alojamiento: any) => ({
          id_alojamiento: alojamiento.id_alojamiento,
          nombre_alojamiento: alojamiento.nombre_alojamiento,
          id_destino: alojamiento.id_destino,
          precio_dia: alojamiento.precio_dia,
          descripcion: alojamiento.descripcion,
          id_usuario: alojamiento.id_usuario,
          max_personas: alojamiento.max_personas,
          direccion: alojamiento.direccion,
          pais: alojamiento.pais,
          ciudad: alojamiento.ciudad,
          correo: alojamiento.correo,
          imagenes: alojamiento.imagenes || [] // Asegurarse de que haya una propiedad de imágenes
        }));
        console.log('Alojamientos completos:', this.alojamientos);
      },
      (error: any) => {
        console.error('Error fetching alojamientos completos:', error);
      }
    );
  }

  abrirModal(alojamiento: any) {
    this.alojamientoSeleccionado = alojamiento;
    this.imagenActual = 0; // Reiniciar el carrusel
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  cambiarImagen(direccion: number) {
    const totalImagenes = this.alojamientoSeleccionado.imagenes.length;
    if (totalImagenes > 0) {
      this.imagenActual = (this.imagenActual + direccion + totalImagenes) % totalImagenes;
    }
  }

  agregarAlCarrito(alojamiento: any) {
    alert(`${alojamiento.nombre_alojamiento} añadido al carrito`);
  }
}
