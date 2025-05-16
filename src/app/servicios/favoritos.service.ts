import { Injectable } from '@angular/core';
import { Producto } from '../paginas/modelos/producto.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'

  })
  export class FavoritosService {
    private favoritosSubject = new BehaviorSubject<{ producto: Producto; cantidad: number }[]>([]);
    favoritos$ = this.favoritosSubject.asObservable()
  
    agregarAFavoritos(producto: Producto) {
      const productos = this.favoritosSubject.getValue();
      const encontrado = productos.find(p => p.producto.id == producto.id);
      if (encontrado) {
        encontrado.cantidad++;
      } else {
        this.favoritosSubject.next([...productos, { producto, cantidad: 1 }])
      }
    }
    eliminarFavoritos(productoId:number){
      const productos = this.favoritosSubject.getValue().filter(p => p.producto.id !== productoId)
      this.favoritosSubject.next(productos)
    }

    constructor() { }
  }

