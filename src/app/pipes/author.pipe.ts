import { Pipe, PipeTransform } from '@angular/core';
import { IAuthor } from '../interfaces/author';

@Pipe({
  name: 'author',
})
export class AuthorPipe implements PipeTransform {
  // transform(author: IAuthor, ...args: unknown[]): string {
  //   return author.lastName + ' ' + author.firstName[0] + '.';
  // }

  transform(author: IAuthor): string {
    let authorFullName: string = JSON.stringify(author);
    let authorFullNameTrimmed = authorFullName.substring(1, authorFullName.length - 1);
    let authorLastName: string = authorFullNameTrimmed.substring(0, authorFullNameTrimmed.indexOf(' '));
    let authorFirstName: string = authorFullNameTrimmed.substring(authorFullNameTrimmed.indexOf(' ') + 1, authorFullNameTrimmed.length);
    authorLastName = authorLastName[0].toUpperCase() + authorLastName.slice(1).toLowerCase();
    authorFirstName =
      authorFirstName[0].toUpperCase() + authorFirstName.slice(1).toLowerCase();
    return authorLastName + ' ' + authorFirstName[0] + '.';
  }
}