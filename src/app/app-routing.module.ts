import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [{
  path: "registro",
  component: RegistroComponent,
  title: "Registro"
},{
  path: "login",
  component: LoginComponent,
  title: "Inicio de sesion"
},{
  path: "inicio",
  component: InicioComponent,
  title: "Inicio"
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
