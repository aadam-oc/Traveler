import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { HeroLoginComponent } from './components/hero-login/hero-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VehiculosAlquilerComponent } from './components/vehiculos-alquiler/vehiculos-alquiler.component';
import { ForoComponent } from './components/foro/foro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthGuard } from './auth.guard';
import { PostBlogComponent } from './components/post-blog/post-blog.component';

export const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: HeroLoginComponent, data: {title: 'INICIO DE SESIÓN'} },
  { path: 'register', component: HeroComponent, data: {title: 'REGISTRO'} },
  { path: 'dashboard', component: DashboardComponent, data: {title: 'DASHBOARD'}},
  { path: 'actividades', component: ActividadesComponent, data: {title: 'ACTIVIDADES'}},
  { path: 'destinos', component: DestinosComponent, data: {title: 'DESTINOS'}},
  { path: 'alojamientos', component: AlojamientosComponent, data: {title: 'ALOJAMIENTOS'}},
  { path: 'vuelos', component: VuelosComponent, data: {title: 'VUELOS'}},
  { path: 'vehiculos-alquiler', component: VehiculosAlquilerComponent, data: {title: 'VEHÍCULOS ALQUILER'}},
  { path: 'foro', component: ForoComponent, data: {title: 'FORO'}},
  { path: 'contacto', component: ContactoComponent, data: {title: 'CONTACTO'}},
  { path: 'perfil', component: PerfilComponent, data: {title: 'PERFIL'}},
  { path: 'post-blog', component: PostBlogComponent},
  { path: '**', redirectTo: '' } 
];


