import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../../models/actividad';
import { MatExpansionModule } from '@angular/material/expansion';
import { Alojamientos } from '../../models/alojamientos';

@Component({
  selector: 'app-gestion-alojamientos',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatExpansionModule],
  templateUrl: './gestion-alojamientos.component.html',
  styleUrl: '../dashboard/dashboard.component.css',
})
export class GestionAlojamientosComponent {
  alojamientos: Alojamientos[] = [];
  alojamientoForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder) {
    this.alojamientoForm = this.fb.group({
      id_alojamiento: [null],
      nombre_alojamiento: ['', Validators.required],
      id_destino: [null, Validators.required],
      precio_dia: [null, Validators.required],
      descripcion: ['', Validators.required],
      id_usuario: [null],
      max_personas: [null, Validators.required],
      direccion: ['', Validators.required]
    });
  }
  
  getAlojamientos() {
    this.apiService.getAlojamientos().subscribe(
      (data: Alojamientos[]) => {
        this.alojamientos = data;
      },
      (error: any) => {
        console.error('Error fetching alojamientos:', error);
      }
    );
  }





  onSubmit() {
    if (this.alojamientoForm.valid) {
      const formData = this.alojamientoForm.value;
      this.apiService.postAlojamiento(formData).subscribe(
        response => {
          console.log('Alojamiento creado:', response);
          this.getAlojamientos(); // Refresh the list after creating a new alojamiento
          this.alojamientoForm.reset(); // Reset the form after submission
        },
        error => {
          console.error('Error creating alojamiento:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
