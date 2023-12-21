import { Component } from '@angular/core';
import { AppService } from './Service/app.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './Service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  hide = true;
margin: any;
  constructor(private appService: AppService, private http: HttpClient, private service: AuthService){

  }
 
}
