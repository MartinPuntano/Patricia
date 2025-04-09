import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'inicio', component:InicioComponent},
    {path: '', redirectTo: '/contacto', pathMatch: 'full'},
    {path: 'contacto', component:ContactoComponent}
];
