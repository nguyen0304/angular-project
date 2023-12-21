import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = '';
  constructor(private http: HttpClient, 
    private appService: AppService) {
    
  }
  //chức năng của hàm là để gọi api đăng nhập
  login(email: any, password: any): Observable<any> { 
    this.url = this.appService.geturlLogin();  //trả về url để login
    let obj = {email, password}; 
    return this.http.post(`${this.url}`, obj).pipe();
  }
  register(fullname: any, email: any, password: any, confirmPass: any): Observable<any> {
   
    let obj = {fullname, email, password, confirmPass};
    this.url = this.appService.getUrlSignUp();
    console.log(obj);
    return this.http.post(`${this.url}`, obj).pipe();
  }
  validateToken(obj: any): Observable<any> {
    let token = {token: obj};
   this.url = this.appService.getUrlValidate();
   return this.http.post(`${this.url}`, token).pipe();
  }

}
