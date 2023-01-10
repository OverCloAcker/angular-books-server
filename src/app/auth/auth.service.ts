import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized: boolean = false;

  // public isAuthorized: boolean = false;

  public get isAuthorized(): boolean {
    return this._isAuthorized;
  }

  // public set isAuthorized(value: boolean) {
  private set isAuthorized(value: boolean) {
    this._isAuthorized = value;
    // if(!this.isAuthorized) {
    //   // this.router.navigate([this.isAuthorized ? '/home' : '/login']);
    //   this.router.navigate(['/login']);
    // }
  }

  constructor(
    private router: Router,
    // private http: HttpClient
  ) { }

  public login(model: LoginModel): Observable<boolean> {
    console.log('Email: ' + model.email);
    console.log('Password: ' + model.password);
    let result: boolean = false;
    if(model.email == 'a@a' && model.password == 'pwd') {
      // return of(true);
      result = true;
      this.router.navigate(['/home']);
    }
    this.isAuthorized = result;
    return of(result);

    // this.isAuthorized = true;
    // this.router.navigate(['/home']);

    // this.http.post<any>();
  }

  // public login(model: LoginModel): Observable<boolean> {
  //   let result: boolean = false;
  //   if(model.email == 'test@email' && model.password == 'password1') {
  //     result = true;
  //   }
  //   this.isAuthorized = result;
  //   return of(result);
  // }

  public logout(): void {
    this.isAuthorized = false;
    this.router.navigate(['/login']);
  }
}
