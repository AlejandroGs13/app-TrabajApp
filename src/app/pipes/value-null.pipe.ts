import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueNull'
})
export class ValueNullPipe implements PipeTransform {

  transform(value: string): string {

    return (value=="undefined")?value:null;
  }

}
