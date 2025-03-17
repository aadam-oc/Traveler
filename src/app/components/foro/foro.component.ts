import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent {
  comments = [
    {
      text: 'Me parece una página increíble, me ha servido para irme de viaje con mis amigos.',
      author: 'Jorge Pastor',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      stars: '⭐⭐⭐⭐☆'
    },
    {
      text: 'Un sitio web muy útil y fácil de navegar.',
      author: 'Ana Gómez',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      stars: '⭐⭐⭐⭐⭐'
    },
    {
      text: 'La información es clara y bien estructurada.',
      author: 'Carlos López',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      stars: '⭐⭐⭐⭐☆'
    },
  ];

  // Inyecta el Router en el constructor
  constructor(private router: Router) {}

  // Método para navegar a la página de PostBlog
  navigateToPostBlog(comment: any) {
    this.router.navigate(['/post-blog'], { state: { comment } });
  }
}