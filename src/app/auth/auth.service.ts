import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { environment } from '../../environments/environment';
import { ILoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private _isAuthorized: boolean = false;
  private _accessToken: string | null = null;

  public get isAuthorized(): boolean {
    // return this._isAuthorized;
    return !!this._accessToken;
  }

  public get accessToken(): string | null {
    return this._accessToken;
  }

  // private set isAuthorized(value: boolean) {
  //   this._isAuthorized = value;
  // }

  constructor(private router: Router, private httpClient: HttpClient) {}

  public login(model: LoginModel): Observable<ILoginResponse> {
    console.log(environment.apiUrl);
    let headers = new HttpHeaders({ ['Content-Type']: 'application/json' });
    return this.httpClient
      .post<ILoginResponse>(
        environment.apiUrl + 'auth/login',
        JSON.stringify(model),
        {
          headers: headers,
        }
      )
      .pipe(
        tap(
          (result) => {
            this._accessToken = result.accessToken;
            this.router.navigate(['/home']);
          },
          (_) => {
            this._accessToken = null;
          }
        )
      );
  }

  public logout(): void {
    this._accessToken = null;
    this.router.navigate(['/login']);
  }
}
