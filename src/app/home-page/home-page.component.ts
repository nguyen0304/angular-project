import { Component, Inject } from '@angular/core';
import { Category } from '../Model/category';
import { AppService } from '../Service/app.service';
import { AuthService } from '../Service/auth.service';
import { CategoryService } from '../Service/category.service';
import { Course } from '../Model/course';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  /////////////////////////////////////////////////////////////INIT////////////////////////////////////////////////////////////////////
  ListCategories: Category[] | null = [];
  ListCourses: Course[] | null = [];
  notToken = false;
  isLogin = false;
  isSignUp = false;
  panelOpenState = true;
  isToken = false;
  isCategory = false;

  ////////////////////////////////////////////////////////CONSTRUCTOR////////////////////////////////////////////////////////////////
  constructor(
    @Inject(AppService) private appService: AppService,
    @Inject(AuthService) private authService: AuthService,
    @Inject(CategoryService) private categoryService: CategoryService
  ) {
    this.checkValid();
  }
  checkValid() {
    let token = localStorage.getItem('token');
    if (token == null) {
      
      this.notToken = true;
      this.isToken = false;
      alert(1);
      return this.isToken;
    } 
    else {
      this.authService.validateToken(token).subscribe(
        (data: any) => {
          this.authService.getUserProfile().subscribe((user: any) =>{
            this.appService.notiSuccess("OK",user);
          }, Error =>{
            this.appService.notiSuccess("OK","FAIL");
          })
          this.notToken = false;
          
          if (data.status == true) {
            this.getAllCategories();
            this.isToken = true;
          }
        },
        (Error) => {
          this.notToken = true;
        }
      );
    }
    return this.isToken;
  }
  // Init() {
  //   let check = this.checkValid();

  // }
  ///////////////////////////////////////////////////////////FUNCTION AUTHORIZATION////////////////////////////////////////////////////
  handleLogin() {
    this.reset();
    this.isLogin = true;
  }
  handleSignUp() {
    this.reset();
    this.isSignUp = true;
  }
  //////////////////////////////////////////////////////////////////////FUNCTION RENDER //////////////////////////////////////////////////////////////////
  reset() {
    this.isLogin = false;
    this.isSignUp = false;
  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (data: any) => {
        this.ListCategories = data;
      },
      (Error) => {
        this.appService.notiWarning(
          'Phiên đăng nhập đã hết',
          'Vui lòng nhấn vào nút đăng nhập để tiến hành đăng nhập lại'
        );
        this.checkValid();
        // this.Init();
      }
    );
  }

  handleCategoryClick(clickedCategory: string) {
    console.log('Category clicked in parent:', clickedCategory);
  }
}
