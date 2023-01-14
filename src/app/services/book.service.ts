import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { IBook } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // private _currentId: string = '1';
  // public _popupMode: string = 'Add';

  // private _books: IBook[] = [
  //   {
  //     id: '1',
  //     name: 'book name 1',
  //     author: {
  //       firstName: 'first name 1',
  //       lastName: 'last name 1',
  //     },
  //   },
  // ];

  // private _books: IBook[] = [];

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  // public getList(): Observable<IBook[]> {
  //   return of(this._books);
  // }

  public getBooks(): Observable<IBook[]> {
    // let headers = new HttpHeaders({
    //   ['Content-Type']: 'application/json',
    //   ['Authentication']: 'Bearer ' + this.authService.accessToken,
    // });
    // return this.httpClient.get<IBook[]>(environment.apiUrl + 'books');
    return this.httpClient.get<IBook[]>(environment.apiUrl + 'books');
  }

  public generateBooks(): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'books/generate/10', {});
  }

  // public addBook(book: IBook): Observable<any> {
  //   this._popupMode = 'Add';
  //   this._currentId = this._currentId + 1;
  //   book.id = this._currentId;
  //   this._books.push(book);
  //   return of();
  // }

  // public editBook(book: IBook): Observable<any> {
  //   // this._popupMode = 'Edit';
  //   const index = this._books.findIndex((b) => b.id == book.id);
  //   if (index != -1) {
  //     this._books[index] = book;
  //   }
  //   return of();
  // }

  public deleteBook(book:IBook): Observable<any> {
    // console.log('Api URL is: ' + environment.apiUrl);
    console.log('Service Book id is: ' + book.id);
    return this.httpClient.delete(environment.apiUrl + 'books/' + book.id);
  }

  public deleteBooks(): Observable<any> {
    return this.httpClient.delete(
      environment.apiUrl + 'books'
    );
  }
}
