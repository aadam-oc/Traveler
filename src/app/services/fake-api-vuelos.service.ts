import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vuelo {
  id_vuelo?: number;
  id_origen: number;
  id_destino: number;
}

@Injectable({
  providedIn: 'root'
})
export class FakeApiVuelosService {
  private apiUrl = 'http://172.17.40.7:3000'; // Ajusta según tu endpoint

  constructor(private http: HttpClient) {}

  // Obtener todos los vuelos
  getVuelos(): Observable<Vuelo[]> {
    return this.http.get<Vuelo[]>(`${this.apiUrl}/vuelos`);
  }

  // Obtener un vuelo por ID
  getVueloById(id: number): Observable<Vuelo> {
    return this.http.get<Vuelo>(`${this.apiUrl}/vuelos/${id}`);
  }

  // Crear un nuevo vuelo
  createVuelo(vuelo: Vuelo): Observable<any> {
    return this.http.post(`${this.apiUrl}/vuelos`, vuelo);
  }

  // Actualizar un vuelo existente
  updateVuelo(id: number, vuelo: Vuelo): Observable<any> {
    return this.http.put(`${this.apiUrl}/vuelos/${id}`, vuelo);
  }

  // Eliminar un vuelo
  deleteVuelo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/vuelos/${id}`);
  }
}
