import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/Service/app.service';
import { AuthService } from 'src/app/Service/auth.service';

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
  constructor(private appService: AppService,
    private register: AuthService){}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  confirmPasswordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  signUpForm = new FormGroup({
    nameInput : this.nameFormControl,
    email: this.emailFormControl,
    password: this.passwordFormControl,
    confirm: this.confirmPasswordFormControl,
  })
  handleLogin(){
    this.reset();
    this.isLogin = true;
  }
  reset(){
    this.isSignUp = false;
    this.isLogin = false;
    this.isForget = false;
  }
  handleSignUp(name: any, email: any, password: any, confirm: any, form: any){
    if(form.invalid){
      this.appService.notiError("OOPS! Đã có lỗi","Bạn vui lòng nhập theo những gì mà form chúng tôi quy định!");
    }
    else  if(password.value != confirm.value){
        this.appService.notiError("OOPS! Đã có lỗi","Bạn vui lòng nhập lại mật khẩu giống với mật khẩu mới mà bạn tạo");
      }
      else{
        name = name.value;
        email = email.value;
        password = password.value;
        let confirmPassword = confirm.value;
        this.register.register(name, email, password, confirmPassword).subscribe((data:any) =>{
          if(data.success == true){
            alert("Sau khi nhấn OK bạn sẽ đăng nhập với tài khoản mới tạo");
            this.appService.notiSuccess("Đã đăng ký thành công", "Xin chúc mừng bạn đã là thành viên của gia đình FEDUCATION");
            
            this.handleLogin();
          }
        }, error => {
          this.appService.notiError("OOPS! Đã có lỗi","Email bạn vừa nhập đã tồn tại trong hệ thống. Xin vui lòng thử lại.");
        });
    
        
      }
  }
}
