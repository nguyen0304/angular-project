import { NgModule } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './component/login/login.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SignUPComponent } from './component/sign-up/sign-up.component';
import { NgToastModule } from 'ng-angular-popup'; // to be added
import { NgSwitch, NgSwitchCase, AsyncPipe } from '@angular/common';
import { CategoryComponent } from './component/category/category.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppService } from './Service/app.service';
import { AuthService } from './Service/auth.service';
import { InterceptorService } from './Interceptor/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SignUPComponent,
    CategoryComponent,
  ],
  providers: [
    AppService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    NgSwitch,
    NgSwitchCase,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgToastModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    MatExpansionModule,
    HttpClientModule,
  ],
})
export class AppModule {}
