import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [NgFor],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  /*
  producto = [
    { nombre: 'Producto 1', precio: 100 },
    { nombre: 'Producto 2', precio: 150 },
    { nombre: 'Producto 3', precio: 200 }
  ];
  */
 inicio = [
  { id: 1, nombre: 'Mini Moog Original',
    precio: '$1195', 
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Minimoog.JPG/1200px-Minimoog.JPG',
    descripcion: 'Sintetizador analógico monofónico de Moog, considerado un hito en la historia de la música electrónica. Fue el primer sintetizador comercializado a gran escala, diseñado como una versión más pequeña y asequible de los sistemas modulares de Moog. '
  },
  { id: 2, nombre: 'Akai MPK Mini MK3',
    precio: '$240', 
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_976251-MLU75124622983_032024-O.webp',
    descripcion: 'El Akai Professional MPK Mini III es un controlador MIDI compacto y portátil, ideal para artistas y productores. Su diseño permite llevarlo fácilmente en una mochila y conectarlo a través de USB.',
  },
  { id: 3, nombre: 'Mellotron',
    precio: '$2000', 
    imagen: 'https://www.futuremusic-es.com/wp-content/uploads/2019/04/Mellotron-V-Screenshot-Open.jpg',
    descripcion: 'El Mellotrón es un instrumento musical de teclado electromecánico, considerado uno de los precursores del sampler, que reproduce sonidos grabados en cintas magnéticas al pulsar las teclas.'
  }
 ];
};
