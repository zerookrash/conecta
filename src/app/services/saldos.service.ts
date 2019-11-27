import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaldosService {

  saldo: any = 0;

  constructor( private http: HttpClient ) {
    this.getSaldos();
   }


  private getSaldos() {
    return new Promise( (res, rej) => {
      const URL = 'https://api.sheety.co/fed17b86-497b-4a6e-9388-f38a495dbd43';
      this.http.get(URL)
      .subscribe( (res: any) => {
        this.saldo = res;
      });
    });
  }


}
