import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss'],
})
export class SignUpDialogComponent {
  public user: IUser = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    public dialogRef: MatDialogRef<SignUpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: IUser
  ) {}

  public get name(): FormControl {
    return this.userForm.get('name') as FormControl;
  }

  public get email(): FormControl {
    return this.userForm.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  public userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onCancelClick() {
    this.dialogRef.close();
  }

  onJoinClick() {
    if (this.userForm.invalid) return;
    let user = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    } as IUser;
    this.dialogRef.close(user);
    // isNewUser = true;
  }
}
