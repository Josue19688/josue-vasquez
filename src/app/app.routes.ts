import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    {
        path:'inicio',
        component:InicioComponent,
    },
    {
        path:'servicios',
        component:ServiciosComponent
    },
    {
        path:'contacto',
        component:ContactoComponent
    },
    {
        path: '**', 
        redirectTo: 'inicio', 
        pathMatch: 'full'
    }
];
