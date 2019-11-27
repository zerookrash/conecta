import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  tarjeta = [];

  constructor(private http: HttpClient) {
    this.getTarjetas();
  }

  private getTarjetas() {
    return new Promise( (res, rej) => {
      const URL = 'https://api.sheety.co/3d6a976a-42d3-405f-b7fa-6959f51c2ff3';
      this.http.get(URL)
      .subscribe( (res: any) => {
        this.tarjeta = res;
      });
    });
  }
}
