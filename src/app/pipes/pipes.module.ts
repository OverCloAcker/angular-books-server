import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPipe } from './author.pipe';
import { NamePipe } from './name.pipe';
import { UserPipe } from './user.pipe';



@NgModule({
  declarations: [
    AuthorPipe,
    NamePipe,
    UserPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthorPipe,
    NamePipe,
    UserPipe
  ]
})
export class PipesModule { }
