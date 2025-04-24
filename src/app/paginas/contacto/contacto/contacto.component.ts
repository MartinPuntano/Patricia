import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-contacto',
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true,
  /*El ReactiveFormsModule logro que se arregle el fallo de FormsModule*/ 
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  /*
  usuario = {
    nombre: ' '
  };
  */
 miFormulario = new FormGroup({
  email: new FormControl('')
});
}
