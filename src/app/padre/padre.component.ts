import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, FormsModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  //CONTADOR

  valorContador: number = 0;

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
}
