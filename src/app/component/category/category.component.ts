import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Model/category';
import { Course } from 'src/app/Model/course';
import { AppService } from 'src/app/Service/app.service';
import { CategoryService } from 'src/app/Service/category.service';
import { ShareService } from 'src/app/Service/shared/share.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  template: '<app-home-page (data)="receiveData($event)"></app-home-page>',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  receivedData: any;
  category: any;
  receiveData(data: any) {
    this.receivedData =  data;
    console.log(data);
  }
  // @Input() category: string | undefined;
  ListCourses: Course[] | null = [];
  constructor(private categoryService: CategoryService, private appService: AppService,private route: ActivatedRoute,
    private sharedService: ShareService) {
      //  Cach 1: this.category = this.sharedService.getCategory();
      // console.log(this.category);

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
  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('category') ?? null;
      if (idParam !== null) {
        this.category = idParam;
      } else {
        console.error('No lesson ID found in the URL.');
      }
    });
  }
}

