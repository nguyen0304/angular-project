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
  login(email: any, password: any): Observable<any> {
    this.url = this.appService.geturlLogin();
    let obj = {email, password};
    console.log(obj);
    return this.http.post(`${this.url}`, obj).pipe();
  }
  register(fullname: any, email: any, password: any, confirmPass: any): Observable<any> {
   
    let obj = {fullname, email, password, confirmPass};
    this.url = this.appService.getUrlSignUp();
    console.log(obj);
    return this.http.post(`${this.url}`, obj).pipe();
  }
}
