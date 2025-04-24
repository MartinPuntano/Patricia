import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [NgFor, NgIf,NgClass],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
   /*
  productos = [
    { nombre: 'Producto 1', precio: 100 },
    { nombre: 'Producto 2', precio: 150 },
    { nombre: 'Producto 3', precio: 200 }
  ]
    */
  usuario = {
    nombre: 'Patricia',
    activo: true
   };
}
