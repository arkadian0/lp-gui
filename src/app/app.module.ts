import { RightViewCoursesComponent } from './components/user-panel-comp/right-view-courses/right-view-courses';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserService } from './http-services/UserService';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpyInterceptor } from './spy.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { LayoutComponent } from './layout/layout.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './components/home-comp/home/home.component';
import { AppRoutingModule } from '../app.routing.module';
import { LoginFormComponent } from './components/login-and-registration-comp/login-form/login-form.component';
import { RegisterFormComponent } from './components/login-and-registration-comp/register-form/register-form.component';
import { LoginRejPanelComponent } from './components/login-and-registration-comp/login-rej-panel/login-rej-panel.component';
import { UserPanelMenuComponent } from './components/login-and-registration-comp/user-panel-menu/user-panel-menu.component';
import { LeftLinksComponent } from './components/user-panel-comp/left-links/left-links.component';
import { RightViewDetailComponent } from './components/user-panel-comp/right-view-detail/right-view-detail.component';
import { UserDetailCompComponent } from './components/user-panel-comp/user-detail-comp/user-detail-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LoginRejPanelComponent,
    UserPanelMenuComponent,
    HomeComponent,
    UserDetailCompComponent,
    LeftLinksComponent,
    RightViewDetailComponent,
RightViewCoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [UserService, CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpyInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }

  ],
  bootstrap: [AppComponent, LayoutComponent]
})
export class AppModule { }
