import { Component } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent {
  idn: number| null = null;
  STT: number| null = null;
  constructor() {
    this.idn = 1;
  }
  test(){
    let code = document.querySelector('.test') as HTMLElement;
  }
}
