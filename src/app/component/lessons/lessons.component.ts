import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lessons } from 'src/app/Model/lessons';
import { LessonsService } from 'src/app/Service/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent {
  idn: number| null = null;
  STT: number| null = null;
  lessonsList: Lessons[] | null = [];
  lessonId: number | null = 0;
  constructor(private lessonService: LessonsService,
    private route: ActivatedRoute) {
    this.idn = 1;
    
  }
  ngOnInit() {
    // Sử dụng paramMap để lấy giá trị của tham số 'id' từ URL
    this.route.paramMap.subscribe(params => {
      // Sử dụng toán tử nullish coalescing để xác định giá trị của params
      const idParam = params.get('id') ?? null;

      // Kiểm tra xem idParam có giá trị không
      if (idParam !== null) {
        // Chuyển đổi sang kiểu number
        this.lessonId = +idParam;
      } else {
        // Xử lý trường hợp khi không có tham số 'id'
        console.error('No lesson ID found in the URL.');
      }
    });
    this.getAllLessons();

  }
  test(){
    let code = document.querySelector('.test') as HTMLElement;
  }
  getAllLessons(){
    if(this.lessonId)
   this.lessonService.getLessons(this.lessonId).subscribe((data: any) => {
      this.lessonsList = data.getLessonsByCourseId.content[0];
      console.log(data.getLessonsByCourseId.content);
      if(data.getLessonsByCourseId.content)
      this.lessonsList = data.getLessonsByCourseId.content;
      // for(let i of data.getLessonsByCourseId.content){

      //   if(data.getLessonsBy.content[i])
      //   this.lessonsList?.push(data.getLessonsBy.content);
      // }
   })
   console.log(this.lessonsList);
  }
}
