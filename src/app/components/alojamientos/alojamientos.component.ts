import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alojamientos',
  imports: [CommonModule],
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent {
  alojamientos = [
    {
      titulo: "Hotel Playa",
      descripcionCorta: "Hermoso hotel con vista al mar.",
      descripcion: "Este hotel cuenta con habitaciones de lujo y una piscina infinita con vista al mar.",
      imagenes: [
        "https://placehold.co/600x400?text=Cabaña",
        "https://placehold.co/600x400?text=Bosque",
        "https://placehold.co/600x400?text=Refugio"
      ]
    },
    {
      titulo: "Cabaña en el bosque",
      descripcionCorta: "Un refugio en medio de la naturaleza.",
      descripcion: "Escápate a esta cabaña rodeada de árboles, ideal para descansar y conectar con la naturaleza.",
      imagenes: [
        "https://placehold.co/600x400?text=Cabaña",
        "https://placehold.co/600x400?text=Bosque",
        "https://placehold.co/600x400?text=Refugio"
      ]
    },
    {
      titulo: "Cabaña en el bosque 2",
      descripcionCorta: "Un refugio en medio de la naturaleza.",
      descripcion: "Escápate a esta cabaña rodeada de árboles, ideal para descansar y conectar con la naturaleza.",
      imagenes: [
        "https://placehold.co/600x400?text=Cabaña",
        "https://placehold.co/600x400?text=Bosque",
        "https://placehold.co/600x400?text=Refugio"
      ]
    }
  ];

  modalAbierto: boolean = false;
  alojamientoSeleccionado: any = null;
  imagenActual: number = 0;

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
    this.imagenActual = (this.imagenActual + direccion + totalImagenes) % totalImagenes;
  }

  agregarAlCarrito(alojamiento: any) {
    alert(`${alojamiento.titulo} añadido al carrito`);
  }
}
