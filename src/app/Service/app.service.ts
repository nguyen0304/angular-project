import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'http://localhost:9000/api';
  constructor(private http: HttpClient,
      private toast: NgToastService) { }
  geturlLogin(){
    return this.url + '/auth/login';
  }
  getUrlSignUp(){
    return this.url + '/auth/register';
  }
  notiSuccess(title: string, message: string){
    this.toast.success({
      detail: title,
      summary: message,
      duration: 3000,
      position: 'topRight',
    });
  }
  notiError(title: string, message: string){
    this.toast.error({
      detail: title,
      summary: message,
      duration: 3000,
      position: 'topRight',
    });
  }
  getToken(){
    let token = localStorage.getItem('token');
    if(token){
      return token;
    }
    else{
      return 'FALSE';
    }
  }
}
