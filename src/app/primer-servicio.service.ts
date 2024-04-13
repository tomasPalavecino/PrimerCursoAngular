import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimerServicioService {

  menor?: string;
  mayor?: string;

  
  getMenor(): string{
    return this.menor || '';
  }

  getMayor(): string{
    return this.mayor || '';
  }

  setMenor(persona: string){
    this.menor = persona;
  }

  setMayor(persona: string){
    this.mayor = persona;
  }



  saludar(persona: string){
    console.log(`Hola ${persona}`);
  }

  preguntarPorHijo():string{
    return 'Como estas?';
  }

  constructor(){

  }
}
