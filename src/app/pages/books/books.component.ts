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
    // this.bookService.getBooks().subscribe((result) => {
    //   this.books = result;
    // });
    this.loadBooks();
  }

  // public addBook() {
  //   const dialogRef = this.dialog.open(AddBookDialogComponent);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.bookService.addBook(result).subscribe();
  //     }
  //   });
  // }

  // public editBook(book: IBook) {
  //   const dialogRef = this.dialog.open(AddBookDialogComponent, {
  //     data: book,
  //   });

  //   //console.log(book.id);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.bookService.editBook(result).subscribe();
  //     }
  //   });
  // }

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
    }

    );
  }

  public deleteBooks() {
    this.bookService.deleteBooks().subscribe(_ => {
      this.loadBooks();
    }
      
    );
    // this.bookService.getBooks().subscribe((result) => {
    //   this.books = result;
    // });
  }

  private loadBooks(): void {
    this.bookService.getBooks().subscribe(result => {
      this.books = result;
    });
  }
}

