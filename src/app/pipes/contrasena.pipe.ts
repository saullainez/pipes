import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, ocultar : boolean = true): string {
    return (ocultar) ? '*'.repeat(value.length) : value;
  }

}
