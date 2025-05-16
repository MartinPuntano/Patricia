import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto/contacto.component';
import { ProductoComponent } from './paginas/producto/producto/producto.component';
import { OfertasComponent } from './paginas/ofertas/ofertas/ofertas.component';
import { CarritoComponent } from './paginas/carrito/carrito/carrito.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos/quienessomos.component';
import { favoritosComponent } from './paginas/favoritos/favoritos.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'inicio', component:InicioComponent},
    
    {path: 'contacto', component:ContactoComponent},
    
    {path: 'producto', component:ProductoComponent},
    
    {path: 'ofertas', component:OfertasComponent},
    
    {path: 'carrito', component:CarritoComponent},

    {path: 'quienessomos', component:QuienessomosComponent},

    {path: 'favoritos', component:favoritosComponent}
];
