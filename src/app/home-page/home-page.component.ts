import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Category } from '../Model/category';
import { AppService } from '../Service/app.service';
import { AuthService } from '../Service/auth.service';
import { CategoryService } from '../Service/category.service';
import { Course } from '../Model/course';
import { User } from '../Model/user';
import { ShareService } from '../Service/shared/share.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  /////////////////////////////////////////////////////////////INIT////////////////////////////////////////////////////////////////////
  ListCategories: Category[] | null = [];
  ListCourses: Course[] | null = [];
  user: User | null = null;
  notToken = false;
  isLogin = false;
  isSignUp = false;
  panelOpenState = true;
  isToken = false;
  isCategory = false;
  nameInput: string | null = null;
  @Output()  dataEvent = new EventEmitter<String>();
  ////////////////////////////////////////////////////////CONSTRUCTOR////////////////////////////////////////////////////////////////
  constructor(
    @Inject(AppService) private appService: AppService,
    @Inject(AuthService) private authService: AuthService,
    @Inject(CategoryService) private categoryService: CategoryService,
    @Inject(ShareService) private shareService: ShareService,
  ) {
    
    this.checkValid();
    this.Init();
    this.getAllCategories();
  }
  checkValid() {
    let token = localStorage.getItem('token');
    if (token == null) {
      this.notToken = true;
      this.isToken = false;
      return this.isToken;
    } else {
      this.authService.getUserProfile().subscribe(
        (userOutput: any) => {
          this.user = userOutput;
          console.log(this.user?.userDTO);
          this.appService.notiSuccess(
            'Đã đăng nhập',
            'Chào mừng bạn đã quay trở lại hệ thống'
          );
          this.isToken = true;

          if (this.user?.userDTO) {
            let stringName = this.user?.userDTO.fullname.split('');
            let nameDisplay = stringName[0].concat(stringName[1]);
            for (let i = stringName.length - 1; i >= 0; i--) {
              if (stringName[i] == ' ') {
                nameDisplay = stringName[0].concat(stringName[i + 1]);
              }
            }
            this.nameInput = nameDisplay;
          }
          this.Init();
          console.log(this.nameInput);
        },
        (Error) => {
          this.notToken = true;
          this.isToken = false;

          this.appService.notiWarning(
            'Phiên đăng nhập đã hết hạn',
            'VUi lòng đăng nhập lại'
          );
        }
      );
    }
    return this.isToken;
  }
  Init() {}
  ///////////////////////////////////////////////////////////FUNCTION AUTHORIZATION////////////////////////////////////////////////////
  handleLogin() {
    this.reset();
    this.isLogin = true;
    this.authService.logout().subscribe((data: string) => {
      this.appService.notiSuccess('Đã đăng xuất', 'Đăng xuất');
    });
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
        location.reload();
      }
    );
  }
  ////////////////////////////////////////////////////////////////FUNCTION GET DATA//////////////////////////////////////////////////////////////////
  // handleCategoryClick(clickedCategory: string) {
  //   console.log('Category clicked in parent:', clickedCategory);
  //   this.category.emit('Hello from ComponentB!');
  // }
  sendData(category: any) {
    this.shareService.setCategory(category);
  }
}
