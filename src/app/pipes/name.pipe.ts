import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../interfaces/book';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(name: string): string {
    return name[0].toUpperCase() + name.slice(1);
  }
}
