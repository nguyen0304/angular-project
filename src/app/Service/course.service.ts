// course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:9000/api';

  constructor(private http: HttpClient) {}

  getUrlCourses(){
    return this.apiUrl + '/courses/top';
  }
}
