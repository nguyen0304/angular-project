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
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
      .set("Content-Type", "application/json")
      .set("Access-Control-Allow-Origin", "*")
      .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');

        const AuthRequest = req.clone({ headers: headers });
        return next.handle(AuthRequest);
      }
  }
