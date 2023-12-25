import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url = ''
  constructor(
    private appService: AppService,
    private http: HttpClient 
  ) {
    this.url = this.appService.getUrlCourses();
   }
   getDetailsCourse(id: number): Observable<any> {
      return this.http.get(`${this.url}/id/${id}`).pipe();
   }
}
