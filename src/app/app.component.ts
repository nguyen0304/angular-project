import { Component } from '@angular/core';
import { AppService } from './Service/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  hide = true;
margin: any;
  constructor(private appService: AppService){
    let check = this.appService.getToken();
    if(check != 'FALSE'){
      console.log(check);
    }
  }
}
