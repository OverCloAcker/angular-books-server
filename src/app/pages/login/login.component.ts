import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ILoginResponse } from 'src/app/interfaces/login-response';
import { IUser } from 'src/app/interfaces/user';
import { LoginModel } from 'src/app/models/login.model';
import { UserService } from 'src/app/services/user.service';
import { SignUpDialogComponent } from './dialogs/sign-up-dialog/sign-up-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public isNewUser: boolean = false;

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  public isLoginFailed: boolean = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    private dialog: MatDialog,
    public userService: UserService
  ) {}

  public login() {
    let model = new LoginModel();
    model.email = this.email.value;
    model.password = this.password.value;
    // this.authService.login(model).subscribe((result: ILoginResponse) => {
    //   this.isLoginFailed = !result;
    // });
    this.authService.login(model).subscribe(
      (result) => {
        this.isLoginFailed = false;
        // this.router.navigate(['/home']);
      },
      (error) => {
        this.isLoginFailed = true;
      }
    );
    // this.authService.login(model).subscribe();
  }

  public join() {
    const dialogRef = this.dialog.open(SignUpDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.joinUser(result).subscribe();
      }
      this.isNewUser = true;
    });
  }
}
