import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  movimiento:Array<Object>;

  constructor(private http: HttpClient) { 
    this.getMovimientos();
  }

  private getMovimientos() {
    return new Promise( (res, rej) => {
      const URL = 'https://api.sheety.co/372fdc0a-99c0-47de-bae0-ed2b856cce62';
      this.http.get(URL)
      .subscribe( (res: any) => {
        this.movimiento = [];
        res.forEach( (x) => {
          this.movimiento.push(x);
        });
      });
    });
  }
}
