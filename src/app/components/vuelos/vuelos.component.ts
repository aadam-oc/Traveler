import { Component } from '@angular/core';
import { OpenaiService } from '../../services/openai.service';
import { CommonModule } from '@angular/common';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-vuelos',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css'],
  providers: [OpenaiService]
})
export class VuelosComponent {

}