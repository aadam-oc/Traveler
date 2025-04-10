import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  imports: [],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})

export class EditarUsuarioComponent {
  editarUsuarioForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.editarUsuarioForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      id_rol: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      telefono1: ['', Validators.required],
      telefono2: [''],
    });
  }

  

  onSubmit(): void {
    
  }
}