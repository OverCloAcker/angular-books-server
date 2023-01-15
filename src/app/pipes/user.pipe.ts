import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/user';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(user: string): string {
    let value = user.split(' ')[0];
    value = value.substring(0, 2) + '...' + value.substring(value.length -2, value.length);
    return value;
  }

}
