import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goals } from '../Model/goals';
import { Course } from '../Model/course';

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
   getDetailsCourse(id: number): Observable<Course> {
      return this.http.get<Course>(`${this.url}/id/${id}`).pipe();
   }
   getObjectiveCourse(id: number): Observable<Goals[]> {
      this.url = this.appService.getUrlGoals();
      return this.http.get<Goals[]>(`${this.url}${id}`).pipe();
   }
   getTopCourse(): Observable<Course[]> {
      this.url = this.appService.getUrlCourses();
      return this.http.get<Course[]>(`${this.url}/top`).pipe();
   }
}
