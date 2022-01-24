import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url = "https://my-json-server.typicode.com/AURACHICO/buscador_prueba/registros"
  constructor(private http: HttpClient) {
   console.log("service registro");
   
  }

  getRegistro() {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
    return this.http.get(this.url, {
      headers: header
    });

  }
}
