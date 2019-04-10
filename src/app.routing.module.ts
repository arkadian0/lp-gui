import { RightViewCoursesComponent } from './app/components/user-panel-comp/right-view-courses/right-view-courses';
import { HomeComponent } from './app/components/home-comp/home/home.component';
import { LayoutComponent } from './app/layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { UserDetailCompComponent } from './app/components/user-panel-comp/user-detail-comp/user-detail-comp.component';
import { RightViewDetailComponent } from './app/components/user-panel-comp/right-view-detail/right-view-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user-detail',
    component: UserDetailCompComponent,
    children: [
    {
      path: 'right-view-detail',
      component: RightViewDetailComponent
    },
    {
      path: 'right-view-add-curses',
      component: RightViewCoursesComponent
    }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
