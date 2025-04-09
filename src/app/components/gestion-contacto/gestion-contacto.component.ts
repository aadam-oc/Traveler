import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-gestion-contacto',
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './gestion-contacto.component.html',
  styleUrl: '../dashboard/dashboard.component.css',
})
export class GestionContactoComponent {
  chat() {
    throw new Error('Method not implemented.');
  }
  resuelto(id: any) {
    this.apiService.resuelto(id).subscribe(
      (data) => {
        console.log('Contacto actualizado:', data);
        // Actualiza la lista de contactos después de marcar como resuelto
        this.getAllContactos();
      });
  }
  contactos: Contacto[] = [];
  p: number = 1; // Variable para la paginación

  constructor(private apiService: ApiService, private router: Router) { }

  getAllContactos() {
    this.apiService.getContactos().subscribe(data => {
      if (data && data.contacto && Array.isArray(data.contacto)) {
        this.contactos = data.contacto.map((contacto: any) => ({
          id_contacto: contacto.id_contacto,
          nombre: contacto.nombre,
          apellido1: contacto.apellido1,
          apellido2: contacto.apellido2,
          correo: contacto.correo,
          telefono: contacto.telefono,
          asunto: contacto.asunto,
          mensaje: contacto.mensaje,
          resuelto: contacto.resuelto,
          fecha_contacto: contacto.fecha_contacto,
        }));
        //console.log('Contactos:', this.contactos);
      } else {
        console.error('Unexpected data format:', data);
      }
    });
  }
  ngOnInit() {
    this.getAllContactos();
  }

}
