import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MihttpService } from '../mihttp.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent {

  error: String

  constructor(private http: MihttpService, private router: Router) {
    this.error = ""
  }

  public login(nombre: string, contraseña: string) {
    const url = "http://localhost:3000/usuarios/login"
    var datos = {
      correo: nombre,
      contraseña: contraseña
    }

    return this.http.login(datos).subscribe({
      next: (data: any) => {
        this.error = ""
        localStorage.setItem("jwt", JSON.parse(JSON.stringify(data)))
        console.log(localStorage.getItem("jwt"))
        this.router.navigate(["/inicio"])
      },
      error: (error: any) => {
        console.log(error)
        this.error = JSON.parse(JSON.stringify(error)).error.text
        
      }
    });
  }
}