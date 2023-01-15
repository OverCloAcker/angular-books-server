import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPipe } from './author.pipe';
import { NamePipe } from './name.pipe';



@NgModule({
  declarations: [
    AuthorPipe,
    NamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthorPipe,
    NamePipe
  ]
})
export class PipesModule { }
