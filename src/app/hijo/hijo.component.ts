import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() hijoRecibeMensaje?: string;
  @Output() mensajeDesdeHijo = new EventEmitter<string>();

  @Output() incrementarContador = new EventEmitter<void>();
  @Output() decrementarContador = new EventEmitter<void>();

  mensaje?: string;

  enviarMensajeAlPadre() {
    this.mensajeDesdeHijo.emit(this.mensaje)
  }

  incrementarValor(){
    this.incrementarContador.emit();
  }

  decrementarValor() {
    this.decrementarContador.emit();
  }

}
