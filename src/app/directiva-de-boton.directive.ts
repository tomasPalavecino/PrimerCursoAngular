import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectivaDeBoton]'
})
export class DirectivaDeBotonDirective {

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'green'
  }

}
