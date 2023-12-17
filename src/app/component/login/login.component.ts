import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  hide = true;
  progressValue: number | null = 0;
  isLogIn = true;
  isSignUp = false;
  margin: any;

  // Form controls for email and password
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  myForm = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });
  constructor(
    private toast: NgToastService) {
    this.showSuccessTopCenter();
  }
  handleSignUp() {
    this.isLogIn = false;
    this.isSignUp = true;
  }

  showSuccessTopCenter() {
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Your Success Message',
      duration: 5000,
      position: 'topRight'
    });
  }

  // New method for handling login
  handleLogin() {
    // Check if email and password are valid
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      // Perform your authentication logic here
      // For demonstration purposes, show a success toast
      this.toast.success({
        detail: 'Login successful',
        summary: 'Success',
        duration: 5000,
        position: 'topRight'
      });
    } else {
      // Show an error toast if credentials are invalid
      this.toast.error({
        detail: 'Invalid email or password',
        summary: 'Error',
        duration: 5000,
        position: 'topRight'
      });
    }
  }
}
