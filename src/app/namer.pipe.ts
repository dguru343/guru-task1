import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namer',
})
export class NamerPipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}
