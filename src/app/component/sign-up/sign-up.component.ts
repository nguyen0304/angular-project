import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUPComponent {
  isSignUp = true;
  isLogin = false;
  isForget = false;
  hide = true;
  progressValue: 0| null = 0;
  handleLogIn(){
    this.reset();
    this.isLogin = true;
  }
  reset(){
    this.isSignUp = false;
    this.isLogin = false;
    this.isForget = false;
  }
}
