import { Component, OnInit } from '@angular/core';
// servicios
import { SaldosService } from '../../services/saldos.service';
import { TarjetasService } from '../../services/tarjetas.service';
import { MovimientosService } from '../../services/movimientos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private saldos: SaldosService,
              private tarjetas: TarjetasService,
              private movimientos: MovimientosService
              ) {}

  ngOnInit() {
  }

}
