import { Component, OnInit } from '@angular/core';
import { PrimerServicioService } from '../primer-servicio.service';

@Component({
  selector: 'app-componente-inicial',
  templateUrl: './componente-inicial.component.html',
  styleUrls: ['./componente-inicial.component.css']
})
export class ComponenteInicialComponent implements OnInit{
  constructor(
    private _primerServicio : PrimerServicioService
  ){}

  nombre?: string;

  ngOnInit(): void {
    this._primerServicio.setMayor('Tomy');
    this.nombre = this._primerServicio.getMayor();
  }

  contador: number = 0;
  mensajePadre = 'Este mensaje es enviado desde el padre.';

  mensajeRecibido: string = '';

  recibirMensaje($event: string){
    this.mensajeRecibido = $event;
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
}
