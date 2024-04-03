import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice',
})
export class SlicePipe implements PipeTransform {
  transform(val: string, count: number): string {
    return `${val.substring(0, count)}${val.length > count ? '...' : ''}`;
  }
}
