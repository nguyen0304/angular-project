import { Component } from '@angular/core';
import { Category } from '../Model/category';
import { AppService } from '../Service/app.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {


    /////////////////////////////////////////////////////////////INIT////////////////////////////////////////////////////////////////////
  ListCategories : Category[] | null =[];
  notToken = false;
  isLogin = false;
  isSignUp = false;
  panelOpenState = true;

    ////////////////////////////////////////////////////////CONSTRUCTOR////////////////////////////////////////////////////////////////
  constructor(private appService: AppService) {
        this.Init();
  }
  Init(){
    if(this.appService.getToken()  == 'FALSE'){
      this.notToken = true;
    }
    else{
      this.notToken = false;
    }
  }
    ///////////////////////////////////////////////////////////FUNCTION AUTHORIZATION////////////////////////////////////////////////////
  handleLogin(){
    this.reset();
    this.isLogin = true;
  }
  handleSignUp(){
    this.reset();
    this.isSignUp = true;
  }
  //////////////////////////////////////////////////////////////////////FUNCTION RENDER //////////////////////////////////////////////////////////////////
  reset(){
    this.isLogin = false;
    this.isSignUp = false;
  }
}
const DATA: Category[] = [
  {
      "id": 10012,
      "category": "Development"
  },
  {
      "id": 10015,
      "category": "Finance"
  },
  {
      "id": 10016,
      "category": "Health"
  },
  {
      "id": 10018,
      "category": "Music"
  },
  {
      "id": 10019,
      "category": "Office"
  },
  {
      "id": 10014,
      "category": "PhotoVideo"
  },
  {
      "id": 10017,
      "category": "Real Estate"
  }
]
