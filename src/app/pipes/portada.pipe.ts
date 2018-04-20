import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'portada'
})
export class PortadaPipe implements PipeTransform {

  transform(value: string, url: string): string {
    return (value)?value:url;
  }

}
