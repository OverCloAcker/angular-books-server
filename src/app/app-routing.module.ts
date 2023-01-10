import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LanguageComponent } from './pages/language/language.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { SearchComponent } from './pages/search/search.component';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books',
    loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'language',
    component: LanguageComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
