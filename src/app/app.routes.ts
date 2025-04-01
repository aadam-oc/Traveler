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
  { path: 'login', component: HeroLoginComponent },
  { path: 'register', component: HeroComponent },
  { path: 'dashboard', component: DashboardComponent}, 
  { path: 'actividades', component: ActividadesComponent},
  { path: 'destinos', component: DestinosComponent},
  { path: 'alojamientos', component: AlojamientosComponent},
  { path: 'vuelos', component: VuelosComponent},
  { path: 'vehiculos-alquiler', component: VehiculosAlquilerComponent},
  { path: 'foro', component: ForoComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'post-blog', component: PostBlogComponent},
  { path: '**', redirectTo: '' } 
];


