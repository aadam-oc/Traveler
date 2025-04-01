import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../../models/actividad';
import { MatExpansionModule } from '@angular/material/expansion';
import { TipoActividad } from '../../models/tipo-actividad';
import { Destinos } from '../../models/destinos';

@Component({
  selector: 'app-gestion-actividades',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatExpansionModule],
  templateUrl: './gestion-actividades.component.html',
  styleUrl: '../dashboard/dashboard.component.css',
})
export class GestionActividadesComponent {
  tipoActividades: TipoActividad[] = [];
  actividades: Actividad[] = [];
  actividadesCompletas: Actividad[] = [];
  destinos: Destinos[] = [];
  formCrearActividad: FormGroup;
  selectedActividad: Actividad | null = null;
  isEditing: boolean = false;

  constructor(private apiService: ApiService, private router: Router, private formBuilder: FormBuilder) {
    this.formCrearActividad = this.formBuilder.group({
      id_actividad: [null],
      id_tipo_actividad: [null, Validators.required],
      id_destino: [null, Validators.required],
      descripcion: [null, Validators.required],
      disponibilidad_actividad: [null],
      precio: [null, Validators.required],
    });
  }


  getTipoActividades() {
    this.apiService.getTiposActividades().subscribe(
      (response: { tipo_actividad: TipoActividad[] }) => {
        this.tipoActividades = response.tipo_actividad;
      },
      error => {
        console.error('Error al obtener los tipos de actividades:', error);
      }
    );
  }

  getDestinos() {
    this.apiService.getDestinos().subscribe(
      (response: { destinos: Destinos[] }) => {
        this.destinos = response.destinos;
      },
      error => {
        console.error('Error al obtener los destinos:', error);
      }
    );
  }

  getAllActividades() {
    this.apiService.getActividadesJoin().subscribe((response: any) => {
      console.log("Datos de la API:", response);
      this.actividadesCompletas = response.actividades;
    });
  }

  editarActividad(actividad: Actividad) {
    this.selectedActividad = actividad;
  }

  eliminarActividad(actividad: Actividad) {
    this.apiService.deleteActividad(actividad.id_actividad).subscribe(
      (response) => {
        console.log('Actividad eliminada:', response);
        this.actividades = this.actividades.filter(a => a.id_actividad !== actividad.id_actividad); // Actualizar la lista de actividades
      },
      error => {
        console.error('Error al eliminar la actividad:', error);
      }
    );
  }
  onSubmit() {
    if (this.formCrearActividad.valid) {
      const nuevaActividad = {
        id_actividad: this.formCrearActividad.value.id_actividad,
        id_tipo_actividad: this.formCrearActividad.value.id_tipo_actividad,
        id_destino: this.formCrearActividad.value.id_destino,
        descripcion: this.formCrearActividad.value.descripcion,
        disponibilidad_actividad: Boolean(this.formCrearActividad.value.disponibilidad_actividad),
        precio: this.formCrearActividad.value.precio,
      };
      console.log('Nueva actividad:', nuevaActividad);
      this.apiService.postActividad(nuevaActividad).subscribe(
        (response: Actividad) => {
          console.log('Actividad creada:', response);
          this.actividades.push(response); // Agregar la nueva actividad a la lista
          this.formCrearActividad.reset(); // Limpiar el formulario después de enviar
          this.getAllActividades(); // Actualizar la lista de actividades
        },
        error => {
          console.error('Error al crear la actividad:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }


  ngOnInit() {
    this.getAllActividades();
    this.getDestinos();
    this.getTipoActividades();
    this.apiService.getActividades().subscribe(
      (response: Actividad[]) => {
        this.actividades = response;
      }
    );
  }
}
