import { StudentLessonComponent } from './app/components/student-panel-comp/student-lesson/student-lesson.component';
import { UnlockUserComponent } from './app/components/admin-comp/unlock-user/unlock-user.component';
import { ReportsUserComponent } from './app/components/admin-comp/reports-user/reports-user.component';
import { BlockUserComponent } from './app/components/admin-comp/block-user/block-user.component';
import { DeleteUserComponent } from './app/components/admin-comp/delete-user/delete-user.component';
import { AddSubjectComponent } from './app/components/admin-comp/add-subject/add-subject.component';
import { AdminContainerComponent } from './app/components/admin-comp/admin-container/admin-container.component';
import { ReportStudentComponent } from './app/components/user-panel-comp/report-student/report-student.component';
import { MainDetailUserComponent } from './app/components/home-comp/main-detail-user/main-detail-user.component';
import { StudentCoursesComponent } from './app/components/student-panel-comp/student-courses/student-courses.component';
import { SearchTeacherComponent } from './app/components/home-comp/search-teacher/search-teacher.component';
import { LessonDetailComponent } from './app/components/user-panel-comp/lesson-detail/lesson-detail.component';
import { RightViewCoursesComponent } from './app/components/user-panel-comp/right-view-courses/right-view-courses';
import { HomeComponent } from './app/components/home-comp/home/home.component';
import { LayoutComponent } from './app/layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { UserDetailCompComponent } from './app/components/user-panel-comp/user-detail-comp/user-detail-comp.component';
import { RightViewDetailComponent } from './app/components/user-panel-comp/right-view-detail/right-view-detail.component';
import { RightViewAddCoursesComponent } from './app/components/user-panel-comp/right-view-add-courses/right-view-add-courses.component';
import { RightViewBuyPremiumComponent } from './app/components/user-panel-comp/right-view-buy-premium/right-view-buy-premium.component';
import { RightViewCoursesDetailComponent } from './app/components/user-panel-comp/right-view-courses-detail/right-view-courses-detail.component';
import { StudentCointainerComponent } from './app/components/student-panel-comp/student-cointainer/student-cointainer.component';
import { StudentDetailComponent } from './app/components/student-panel-comp/student-detail/student-detail.component';
import { StudentBuyPremiumComponent } from './app/components/student-panel-comp/student-buy-premium/student-buy-premium.component';
import { ReportTeacherComponent } from './app/components/student-panel-comp/report-teacher/report-teacher.component';
import { NoteTeacherComponent } from './app/components/student-panel-comp/note-teacher/note-teacher.component';
import { RightViewAddLessonComponent } from './app/components/user-panel-comp/right-view-add-lesson/right-view-add-lesson.component';
import { RightViewLessonDetailComponent } from './app/components/user-panel-comp/right-view-lesson-detail/right-view-lesson-detail.component';
import { RightViewLessonComponent } from './app/components/user-panel-comp/right-view-lesson/right-view-lesson.component';
import { SearchLessonComponent } from './app/components/home-comp/search-lesson/search-lesson.component';
import { MainDetailLessonComponent } from './app/components/home-comp/main-detail-lesson/main-detail-lesson.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'search-teacher/:courseName',
    component: SearchTeacherComponent
  },
  {
    path: 'search-lesson/:courseName',
    component: SearchLessonComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'main-detail-user/:id',
    component: MainDetailUserComponent
  },
  {
    path: 'main-detail-lesson/:id',
    component: MainDetailLessonComponent
  },
  {
    path: 'student-detail',
    component: StudentCointainerComponent,
    children: [
      {
        path: 'student-detail',
        component: StudentDetailComponent
      },
      {
        path: 'student-courses',
        component: StudentCoursesComponent
      },
      {
        path: 'student-buy-premium',
        component: StudentBuyPremiumComponent
      },
      {
        path: 'student-note-teacher',
        component: NoteTeacherComponent
      },
      {
        path: 'student-report-teacher',
        component: ReportTeacherComponent
      },
      {
        path: 'student-lesson',
        component: StudentLessonComponent
      }
    ]},
  {
    path: 'teacher-detail',
    component: UserDetailCompComponent,
    children: [
    {
      path: 'right-view-detail',
      component: RightViewDetailComponent
    },
    {
      path: 'right-view-courses',
      component: RightViewCoursesComponent
    },
    {
      path: 'right-view-add-courses',
      component: RightViewAddCoursesComponent
    },
    {
      path: 'right-view-buy-premium',
      component: RightViewBuyPremiumComponent
    },
    {
      path: 'right-view-courses-detail/:id',
      component: RightViewCoursesDetailComponent
    },
    {
      path: 'report-student',
      component: ReportStudentComponent
    },
    {
      path: 'right-view-add-lesson',
      component: RightViewAddLessonComponent
    },
    {
      path: 'right-view-lesson',
      component: RightViewLessonComponent
    },
    {
      path: 'right-view-lesson-detail/:id',
      component: RightViewLessonDetailComponent
    }
    ]},
    {
      path: 'admin-container',
      component: AdminContainerComponent,
      children: [
        {
          path: 'add-subject',
          component: AddSubjectComponent
        },
        {
          path: 'delete-user',
          component: DeleteUserComponent
        },
        {
          path: 'block-user',
          component: BlockUserComponent
        },
        {
          path: 'reports-user',
          component: ReportsUserComponent
        },
        {
          path: 'unlock-user',
          component: UnlockUserComponent
        }
      ]}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
