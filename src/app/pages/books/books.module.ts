import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { AddBookDialogComponent } from './dialogs/add-book-dialog/add-book-dialog.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [BooksComponent, AddBookDialogComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    PipesModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
  ],
})
export class BooksModule {}
