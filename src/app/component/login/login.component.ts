import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  hide = true;
  progressValue : number | null = 0;
  isLogIn = true;
  isSignUp = false;
  handleSignUp(){
    this.isLogIn = false;
    this.isSignUp = true;
  }
}
