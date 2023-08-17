import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MihttpService {

  url= "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  registrarse(body: any) {
    return this.http.post(this.url + "usuarios", body);
  }

  login(body: any) {
    return this.http.post(this.url + "usuarios/login", body);
  }


}
