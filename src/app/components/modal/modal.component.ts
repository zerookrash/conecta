import {Component} from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


  constructor() {}

  tarjeta = new FormGroup({
    numero: new FormControl(''),
    cuenta: new FormControl(''),
    issure: new FormControl(''),
    nombre: new FormControl(''),
    marca: new FormControl(''),
    estatus: new FormControl(''),
    saldo: new FormControl(''),
    tipo: new FormControl('')
  });

  envio() {
    console.log(this.tarjeta.value);
    alert( JSON.stringify(this.tarjeta.value) );
  }

}
