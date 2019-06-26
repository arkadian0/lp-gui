import { AddSubjectComponent } from './components/admin-comp/add-subject/add-subject.component';
import { StudentDetailComponent } from './components/student-panel-comp/student-detail/student-detail.component';
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
import { RightViewCoursesDetailComponent } from './components/user-panel-comp/right-view-courses-detail/right-view-courses-detail.component';
import { RightViewAddCoursesComponent } from './components/user-panel-comp/right-view-add-courses/right-view-add-courses.component';
import { RightViewBuyPremiumComponent } from './components/user-panel-comp/right-view-buy-premium/right-view-buy-premium.component';
import { LessonDetailComponent } from './components/user-panel-comp/lesson-detail/lesson-detail.component';
import { SearchTeacherComponent } from './components/home-comp/search-teacher/search-teacher.component';
import { KeysPipe } from './pipes/keyspipe.pipe';
import { LeftLinksStudentComponent } from './components/student-panel-comp/left-links-student/left-links-student.component';
import { StudentCointainerComponent } from './components/student-panel-comp/student-cointainer/student-cointainer.component';
import { StudentCoursesComponent } from './components/student-panel-comp/student-courses/student-courses.component';
import { StudentBuyPremiumComponent } from './components/student-panel-comp/student-buy-premium/student-buy-premium.component';
import { NoteTeacherComponent } from './components/student-panel-comp/note-teacher/note-teacher.component';
import { ReportTeacherComponent } from './components/student-panel-comp/report-teacher/report-teacher.component';
import { MainDetailUserComponent } from './components/home-comp/main-detail-user/main-detail-user.component';
import { ReportStudentComponent } from './components/user-panel-comp/report-student/report-student.component';
import { LeftLinksAdminComponent } from './components/admin-comp/left-links-admin/left-links-admin.component';
import { AdminContainerComponent } from './components/admin-comp/admin-container/admin-container.component';
import { DeleteUserComponent } from './components/admin-comp/delete-user/delete-user.component';
import { BlockUserComponent } from './components/admin-comp/block-user/block-user.component';
import { ReportsUserComponent } from './components/admin-comp/reports-user/reports-user.component';
import { UnlockUserComponent } from './components/admin-comp/unlock-user/unlock-user.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angular5-social-login';
import { getAuthServiceConfigs } from './socialloginConfig';
import { RightViewAddLessonComponent } from './components/user-panel-comp/right-view-add-lesson/right-view-add-lesson.component';
import { RightViewLessonDetailComponent } from './components/user-panel-comp/right-view-lesson-detail/right-view-lesson-detail.component';
import { RightViewLessonComponent } from './components/user-panel-comp/right-view-lesson/right-view-lesson.component';
import { SearchLessonComponent } from './components/home-comp/search-lesson/search-lesson.component';
import { MainDetailLessonComponent } from './components/home-comp/main-detail-lesson/main-detail-lesson.component';
import { StudentLessonComponent } from './components/student-panel-comp/student-lesson/student-lesson.component';
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
    RightViewCoursesComponent,
    RightViewCoursesDetailComponent,
    RightViewAddCoursesComponent,
    RightViewBuyPremiumComponent,
    LessonDetailComponent,
    SearchTeacherComponent,
    KeysPipe,
    StudentDetailComponent,
    StudentCointainerComponent,
    LeftLinksStudentComponent,
    StudentCoursesComponent,
    StudentBuyPremiumComponent,
    NoteTeacherComponent,
    ReportTeacherComponent,
    MainDetailUserComponent,
    ReportStudentComponent,
    LeftLinksAdminComponent,
    AdminContainerComponent,
    AddSubjectComponent,
    DeleteUserComponent,
    BlockUserComponent,
    ReportsUserComponent,
    UnlockUserComponent,
    RightViewAddLessonComponent,
    RightViewLessonDetailComponent,
    RightViewLessonComponent,
    SearchLessonComponent,
    MainDetailLessonComponent,
    StudentLessonComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,

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
    },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent, LayoutComponent]
})
export class AppModule { }
