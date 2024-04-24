import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const date = parseInt(value);
    return new Date(date).toLocaleDateString();
  }
}
