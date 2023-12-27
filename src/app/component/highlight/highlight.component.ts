import { Component, Inject } from '@angular/core';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent {
  ListCourses: Course[] ;
  idList: number[];
  constructor( @Inject(CourseService) private courseService: CourseService){
      this.idList = [];
      this.ListCourses = []
  }
  getTop6Courses() {
    this.courseService.getTopCourse().subscribe(
      (data: any) => {
        this.ListCourses = data;
        console.log(this.ListCourses);
        if(this.ListCourses)
        this.idList = this.ListCourses.map(course => course.id);
        console.log(this.idList);
      },
      error => {
        console.log(error.message);
      }
    );
  }
}
