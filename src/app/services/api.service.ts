import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Item } from '../models/item.model'; // Importa la interfaz


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

//Autorizacion
  //register
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/traveler/register`, user);
  }

  //login
  loginUser(data: any): Observable<any> {
    return this.http.post('http://172.17.22.103:3000/traveler/login', data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }




//actividades
getActividades(): Observable<any> {
  const actividades = this.http.get(`${this.apiUrl}/traveler/actividades`);
  return actividades;
}

//actividad por id
getActividadById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/actividades/${id}`);
}

//crear actividad
postActividad(actividad: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/traveler/actividades`, actividad);
}

//actualizar actividad
putActividad(id: number, actividad: Item): Observable<any> {
  return this.http.put(`${this.apiUrl}/traveler/actividades/${id}`, actividad);
}

//eliminar actividad
deleteActividad(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/traveler/actividades/${id}`);
}

//actividades completo
getActividadesJoin(): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/actividades_completo`);
}

//actividad completa sin imagen
getActividadCompleta(): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/actividades_completo_sin_imagenes`);
}

//actividades completo
getActividadesJoinById(id_actividad: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/actividades_completo/${id_actividad}`);
}

putActividadCompleta(id_actividad: number, actividad: Item): Observable<any> {
  return this.http.put(`${this.apiUrl}/traveler/actividades_completo/${id_actividad}`, actividad);
}






//tipos_actividades
getTiposActividades(): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/tipo_actividad`);
}

//tipo_actividad por id
getTipoActividadById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/tipo_actividad/${id}`);
}

//crear tipo_actividad
postTipoActividad(nombre_tipo_actividad: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/traveler/tipo_actividad`, nombre_tipo_actividad);
}

//actualizar tipo_actividad
putTipoActividad(id: number, tipo_actividad: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/traveler/tipo_actividad/${id}`, tipo_actividad);
}

//eliminar tipo_actividad
deleteTipoActividad(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/traveler/tipo_actividad/${id}`);
}





//destinos
getDestinos(): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/destinos`);
}

//destinos por id
getDestinoById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/destinos/${id}`);
}

//crear destino
postDestino(destino: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/traveler/destinos`, destino);
}

//actualizar destino
putDestino(id: number, destino: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/traveler/destinos/${id}`, destino);
}

//eliminar destino
deleteDestino(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/traveler/destinos/${id}`);
}




//alojamientos
getAlojamientos(): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/alojamientos`);
}

//alojamientos completos
getAlojamientosCompletos(): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/alojamientos_completo`);
}

//alojamiento por id
getAlojamientoById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/alojamientos/${id}`);
}

//crear alojamiento
postAlojamiento(alojamiento: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/traveler/alojamientos`, alojamiento);
}

//actualizar alojamiento
putAlojamiento(id: number, alojamiento: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/traveler/alojamientos/${id}`, alojamiento);
}

//eliminar alojamiento
deleteAlojamiento(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/traveler/alojamientos/${id}`);
}








//usuarios
getUsuarios(): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/usuarios`);
}


//usuarios completos
getUsuariosCompletos(): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/usuarios_full`);
}

getUsuariosCompletosById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/usuarios_full/${id}`);
}

//usuario por id
getUsuarioById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/usuarios/${id}`);
}

//crear usuario
postUsuario(usuario: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/traveler/usuarios`, usuario);
}

postUsuarioCompleto(usuario: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/traveler/usuarios_full`, usuario);
}

//actualizar usuario
putUsuario(id: number, usuario: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/traveler/usuarios/${id}`, usuario);
}

//actualizar usuario completo
putUsuarioCompleto(id: number, usuario: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/traveler/usuarios_full/${id}`, usuario);
}

//eliminar usuario
deleteUsuario(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/traveler/usuarios/${id}`);
}









//caracterisitcas_usuarios
getCaracterisitcasUsuarios(): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/caracteristicas_usuarios`);
}

//caracterisitca_usuario por id
getCaracterisitcaUsuarioById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/caracteristicas_usuarios/${id}`);
}

//crear caracterisitca_usuario
postCaracterisitcaUsuario(caracterisitca_usuario: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/traveler/caracteristicas_usuarios`, caracterisitca_usuario);
}

//actualizar caracterisitca_usuario
putCaracterisitcaUsuario(id: number, caracterisitca_usuario: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/traveler/caracteristicas_usuarios/${id}`, caracterisitca_usuario);
}

//eliminar caracterisitca_usuario
deleteCaracterisitcaUsuario(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/traveler/caracteristicas_usuarios/${id}`);
}








//roles
getRoles(): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/roles`);
}

//rol por id
getRolById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/roles/${id}`);
}

//crear rol
postRol(rol: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/traveler/roles`, rol);
}

//actualizar rol
putRol(id: number, rol: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/traveler/roles/${id}`, rol);
}

deleteRol(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/traveler/roles/${id}`);
}








  
//contacto

getContactos(): Observable<any> {
  return this.http.get(`${this.apiUrl}/contacto/contacto`);
}

postContacto(contacto: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/contacto/contacto`, contacto);
}

resuelto(id: number): Observable<any> {
  return this.http.put(`${this.apiUrl}/contacto/contacto/resuelto/${id}`, {});
}


//imagenes alojamientos
getImagenesAlojamientos(id_alojamiento: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/traveler/imagenes_alojamientos/alojamiento/${id_alojamiento}`);
}
  
  
  
}
