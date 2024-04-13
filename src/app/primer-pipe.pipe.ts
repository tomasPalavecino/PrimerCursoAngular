import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primerPipe'
})
export class PrimerPipePipe implements PipeTransform {

  transform(value: string | undefined): string {
    return value?.toUpperCase() || '';
  }

}
