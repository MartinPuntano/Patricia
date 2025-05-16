import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../servicios/favoritos.service';
import { Producto } from '../modelos/producto.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-carrito',
  imports: [CommonModule, FormsModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class favoritosComponent implements OnInit {
  productosEnFavoritos: {producto:Producto; cantidad:number}[] = [];

  constructor(private favoritosService : FavoritosService) {}

  ngOnInit(): void {
    this.favoritosService.favoritos$.subscribe((productos) => {
      this.productosEnFavoritos = productos
    });
  }

agregarAFavoritos(index: number){
  this.productosEnFavoritos[index].cantidad++;
}

eliminarFavoritos(productoId:number){
  this.favoritosService.eliminarFavoritos(productoId)
}

}
