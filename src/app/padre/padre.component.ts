import { Component, OnInit } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { FormsModule } from '@angular/forms';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, FormsModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit{

  //CONTADOR

  valorContador: number = 0;
  
  nombre?: string;


  constructor(private _servicioFamiliar: ServicioFamiliarService){}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMayor('Juan')
    this.nombre = this._servicioFamiliar.getHermanoMayor()
  }

  incrementarValor() {
    this.valorContador++;
  }

  decrementarValor() {
    if (this.valorContador > 0) {
      this.valorContador--;
    } else {
      alert("Este contador no puede tener numeros negativos")
    }
  }


  //DATA BINDING
  mensajePadre?: string;

  mensajeRecibidoDesdeHijo: string = '';

  recibirMensaje($event: string) {
    this.mensajeRecibidoDesdeHijo = $event;
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMenor())
  }
}
