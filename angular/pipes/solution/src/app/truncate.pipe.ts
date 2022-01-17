import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(input: any, length?: number): any {
    if (input.length <= length) {
      return input;
    }

    return input.substring(0, length) + '...';
  }
}