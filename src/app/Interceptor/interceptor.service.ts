import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { 

  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler) :Observable<HttpEvent<any>> {
      const token = localStorage.getItem("token");
      const sessionCookie = this.getSessionCookie();
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
      .set('Cookie', `WD_SESSION=${sessionCookie}`)
      .set("Content-Type", "application/json")
      .set("Access-Control-Allow-Origin", "*")
      .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
        const AuthRequest = req.clone({ headers: headers , withCredentials: true});
        return next.handle(AuthRequest);
      }
      private getSessionCookie(): string | null {
        // Lấy giá trị cookie là session từ localStorage hoặc nơi lưu trữ khác
        return localStorage.getItem('sessionCookie');
      }
  }
