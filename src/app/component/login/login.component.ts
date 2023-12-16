import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgToastService } from 'ng-angular-popup';
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
margin: any;
  handleSignUp(){
    this.isLogIn = false;
    this.isSignUp = true;
  }
  constructor(
    private toast: NgToastService ){
      this.showSuccessTopCenter();
    }
    showSuccessTopCenter() {
      this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000, position:'topRight'});
    }
}
