import { Component, Inject } from '@angular/core';
import { Category } from '../Model/category';
import { AppService } from '../Service/app.service';
import { AuthService } from '../Service/auth.service';
import { CategoryService } from '../Service/category.service';
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
  constructor(
    @Inject(AppService)private appService: AppService, 
    @Inject(AuthService) private authService: AuthService,
    @Inject(CategoryService) private categoryService: CategoryService) {
        this.Init();
        
  }
  checkValid(){
    let token = localStorage.getItem('token');
    if(token  == null){
      return false;
    }
    else{
        this.authService.validateToken(token).subscribe((data: any) => {
          if(data.status == true)
          {
            this.getAllCategories();
            return true;
          }
          
        else {
          this.appService.logOut();
          return false;}
        })
        return false;
    }
  }
  Init(){
    if(this.checkValid() == true ){
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
  getAllCategories(){
      this.categoryService.getAllCategories().subscribe((data: any) => {
        this.ListCategories = data;
      })
  }
}
