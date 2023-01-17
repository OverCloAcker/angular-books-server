import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from './dialogs/add-book-dialog/add-book-dialog.component';
import { IBook } from 'src/app/interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  // export class BooksComponent {
  public books: IBook[] = [];

  constructor(public bookService: BookService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  public addBook() {
    const dialogRef = this.dialog.open(AddBookDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.bookService.addBook(result).subscribe(_ => {
          this.loadBooks();
        });
      }
      // this.loadBooks();
    });
  }

  // public addBook() {
  //   this.bookService.addBook().subscribe(_ => {
  //     this.loadBooks();
  //   });
  // }

  public editBook(book: IBook) {
    let authorFullName: string = JSON.stringify(book.author);
    let authorFullNameTrimmed = authorFullName.substring(1, authorFullName.length - 1);
    let authorLastName: string = authorFullNameTrimmed.split(' ')[0];
    let authorFirstName: string = authorFullNameTrimmed.split(' ')[1];
    const dialogRef = this.dialog.open(AddBookDialogComponent, {
      // data: book,
      data: {
        id: book.id,
        name: book.name,
        author: {
          firstName: authorFirstName,
          lastName: authorLastName
        }
      }
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.bookService.editBook(result).subscribe();
    //   }
    // });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.bookService.editBook(result).subscribe(_ => {
          this.loadBooks();
        });
      }
    });
  }

  public generateBooks() {
    this.bookService.generateBooks().subscribe(_ => {
      this.bookService.getBooks().subscribe((result) => {
        this.books = result;
      });
    });
  }

  public deleteBook(book: IBook) {
    this.bookService.deleteBook(book).subscribe(_ => {
      this.loadBooks();
    });
  }

  public deleteBooks() {
    this.bookService.deleteBooks().subscribe(_ => {
      this.loadBooks();
    });
  }

  private loadBooks(): void {
    this.bookService.getBooks().subscribe(result => {
      this.books = result;
    });
  }
}

