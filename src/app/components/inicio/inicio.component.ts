import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Actividad } from '../../models/actividad';
@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  actividades: Actividad[] = [];
  actividad: any;

  constructor(private apiService: ApiService) { }

  scrollToSection(): void {
    const target = document.getElementById('destacados');
    if (!target) return;
  
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // duración de 1 segundo
    let start: number | null = null;
  
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutCubic(percent));
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };
  
    // Función de aceleración suave (puedes probar otras como easeOutQuad)
    const easeInOutCubic = (t: number): number =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  
    requestAnimationFrame(step);
  }
  

  getActividades() {
    this.apiService.getActividadesJoin().subscribe((response: any) => {
      console.log("Datos de la API:", response);
      this.actividades = response.actividades;

      this.actividades = this.actividades.slice(0, 3);
    });
  };

  ngOnInit() {
    this.getActividades();
  }
}
