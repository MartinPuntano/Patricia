import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';

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
   /*
  usuario = {
    nombre: 'Patricia',
    activo: true
   };
   */
  Productos: Producto[] = [
    {
      id:1,
      nombre:'hola',
      descripcion:'',
      precio:2000,
      imagen:'',
      disponibilidad: true
    }
  ]
  constructor(private carritoService: CarritoService ){}

  // Metodo para agregar un producto al carrito
  agregar(producto: Producto){
    this.carritoService.agregarAlCarrito(producto)
    alert('Producto agregado al carrito') //Muestra el mensaje
  }
}
