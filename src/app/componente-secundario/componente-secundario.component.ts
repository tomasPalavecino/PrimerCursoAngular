import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-secundario',
  templateUrl: './componente-secundario.component.html',
  styleUrls: ['./componente-secundario.component.css']
})
export class ComponenteSecundarioComponent {
  @Input() recibeSecundario: string = '';
  @Output() mensajeParaAfuera = new EventEmitter<string>();
  @Output() incrementarDesdeSecundario = new EventEmitter<void>();
  @Output() decrementarDesdeSecundario = new EventEmitter<void>();

  mensajeSecundario: string = '';

  enviarMensaje(){
    this.mensajeParaAfuera.emit(this.mensajeSecundario);
  }

  incrementar(){
    this.incrementarDesdeSecundario.emit();
  }
  
  decrementar(){
    this.decrementarDesdeSecundario.emit();
  }
}