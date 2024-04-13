import { Component, OnInit, inject } from '@angular/core';
import { PrimerServicioService } from '../primer-servicio.service';

@Component({
  selector: 'app-hermano-de-inicial',
  templateUrl: './hermano-de-inicial.component.html',
  styleUrls: ['./hermano-de-inicial.component.css']
})
export class HermanoDeInicialComponent implements OnInit{
  nombre?: string;

  private _primerServicio = inject(PrimerServicioService);

  ngOnInit(): void {
    this._primerServicio.setMenor('Emi');
    this.nombre = this._primerServicio.getMenor();
  }

  saludar(){
    this._primerServicio.saludar(this._primerServicio.getMayor() || '')
  }
}
