import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  constructor(private router: Router) {}
  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }
  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);  
  }
  
}
