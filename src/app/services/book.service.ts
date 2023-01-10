import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private _currentId: number = 1;
  public _popupMode: string = 'Add';

  private _books: IBook[] = [
    {
      id: 1,
      name: 'book name 1',
      author: {
        firstName: 'first name 1',
        lastName: 'last name 1',
      },
    },
  ];

  constructor() {}

  public getList(): Observable<IBook[]> {
    return of(this._books);
  }

  public addBook(book: IBook): Observable<any> {
    this._popupMode = 'Add';
    this._currentId = this._currentId + 1;
    book.id = this._currentId;
    this._books.push(book);
    return of();
  }

  public editBook(book: IBook): Observable<any> {
    this._popupMode = 'Edit';
    const index = this._books.findIndex((b) => b.id == book.id);
    if (index != -1) {
      this._books[index] = book;
    }
    return of();
  }
}
