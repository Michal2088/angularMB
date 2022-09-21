
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(array: any, propName: string, value: string): any {
    let afterFilter: any = array.filter((person: any) => {
      return person[propName].toLowerCase().includes(value.toLowerCase());
      
    });
    return afterFilter;

  }
}
