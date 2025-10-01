import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padLeft',
})
export class PadLeftPipe implements PipeTransform {
  transform(value: number | string, length: number = 2, char: string = '0'): string {
    return value.toString().padStart(length, char);
  }
}
