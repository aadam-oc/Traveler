import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service'; // Importa el ApiService
import { Router } from '@angular/router'; // Importa el Router para la navegación

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm: FormGroup;
  errorMessage: string = ''; 

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('Formulario inválido:', this.loginForm.value);
      return;
    }
  
    const loginData = {
      correo: this.loginForm.value.email,
      contrasena: this.loginForm.value.password
    };
  
    console.log('📤 Enviando datos:', JSON.stringify(loginData));
  
    this.apiService.loginUser(loginData).subscribe({
      next: (response) => {
        console.log('✅ Login exitoso', response);
        localStorage.setItem('authToken', response.token);
    
        // Verificar si el token está guardado correctamente
        console.log('Token guardado en localStorage:', localStorage.getItem('authToken'));
    
        // Redirección después del login exitoso
        this.router.navigateByUrl('/inicio').catch((err) => {
          console.error('Error al redirigir:', err);
        });
      },
      error: (err) => {
        console.error('❌ Error en el login', err);
        this.errorMessage = 'Credenciales incorrectas. Inténtalo nuevamente.';
      }
    });
    
  }
  
  
  
  
  

  get isSubmitDisabled(): boolean {
    return this.loginForm.invalid;
  }
}
