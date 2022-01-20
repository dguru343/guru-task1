import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorchanger',
})
export class ColorchangerPipe implements PipeTransform {
  transform(value: any, value2: any): any {
    return 'City : ' + value;
  }
}
