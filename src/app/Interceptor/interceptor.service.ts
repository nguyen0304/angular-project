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
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      if (!(req.body instanceof FormData)) {
        headers = headers.set("Content-Type", "application/json");
        const AuthRequest = req.clone({ headers: headers });
        return next.handle(AuthRequest);
      }
      else {
        return next.handle(req);
      }
      }
  }
