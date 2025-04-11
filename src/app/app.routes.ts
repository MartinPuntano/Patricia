import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { ProductosComponent } from './producto/productos/productos.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'inicio', component:InicioComponent},
    {path: '', redirectTo: '/contacto', pathMatch: 'full'},
    {path: 'contacto', component:ContactoComponent},
    {path: '', redirectTo: '/producto', pathMatch: 'full'},
    {path: 'producto', component:ProductosComponent}
];
