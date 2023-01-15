import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient
  ) {}

  public joinUser(user: IUser): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'auth/register', {
      name: user.name,
      email: user.email,
      password: user.password
    });
  }
}
