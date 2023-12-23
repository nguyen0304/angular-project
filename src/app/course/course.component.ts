// course.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @ViewChild('courseList') courseList: ElementRef | undefined;
  courses: any[] = [];

  constructor(private http: HttpClient, private courseService: CourseService) {}

  ngOnInit() {
    this.http.get(this.courseService.getUrlCourses()).subscribe((data: any) => {
      console.log(data);
      this.courses = data;
    });
  }
}
