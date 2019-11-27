import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  cuenta: any = [];

  constructor(private http: HttpClient) {
    this.getCuenta();
  }

  private getCuenta() {
    return new Promise( (res, rej) => {
      const URL = 'https://api.sheety.co/7ce411a1-17b6-41e5-b67c-55b3ac5df463';
      this.http.get(URL)
      .subscribe( (res: any) => {
        this.cuenta = res;
      });
    });
  }



}
