import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/Model/category';
import { Course } from 'src/app/Model/course';
import { AppService } from 'src/app/Service/app.service';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() category: string | undefined;
  @Output() categoryClicked = new EventEmitter<string>();
  ListCourses: Course[] | null = [];
  constructor(private categoryService: CategoryService, private appService: AppService) {
    
  }
  handleClick() {
    this.categoryClicked.emit(this.category);
    this.handleCategory(this.category);
  }
  handleCategory(name: any) {
    this.categoryService.getCoursesCategories(name).subscribe((data: any) => {
      this.ListCourses = data;
      console.log(this.ListCourses);
    },Error => {
        this.appService.notiError("Đã có lỗi xảy ra", "Rất tiếc nhưng hình như đã có lỗi gì đó");
        location.reload();
    });
  }
}
