import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  template: "<div #divItems></div>",
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent {
  /*@ViewChild("divItems", {static: true}) divItems: ElementRef;

  constructor (private renderer: Renderer2){

  }

  generarItems(){
    let contGral = this.renderer.createElement("div");
    let divImg = this.renderer.createElement("div");
    let img = this.renderer.createElement("img");
    let button = this.renderer.createElement("a");
    let desc = this.renderer.createElement("p");
  
    this.renderer.setAttribute(contGral, "class", "item")
    this.renderer.setAttribute(divImg, "class", "contenedorImagen")
    this.renderer.setAttribute(img, "src", "../../assets/colonel travis.jpg")
    this.renderer.setAttribute(img, "class", "imagenItem")
    this.renderer.setAttribute(img, "alt", "imagen mascota")
  }
*/
}
