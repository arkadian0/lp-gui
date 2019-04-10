import { Courses } from './../../login-and-registration-comp/login-rej-panel/login-rej-panel.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../login-and-registration-comp/login-rej-panel/login-rej-panel.component';

@Component({
  selector: 'app-right-view-courses',
  templateUrl: './right-view-courses.html',
  styleUrls: ['./right-view-courses.css']
})
export class RightViewCoursesComponent implements OnInit {

  constructor(private userService: UserService, private cookieService: CookieService) { }
  userCourses : Courses;
  ngOnInit() {
    this.getUserCourses();
  }

  getUserCourses()  {
    const user = <User>{};
    user.username = this.cookieService.get('username');
    user.password = this.cookieService.get('password');
    this.userService.getUser(user).subscribe(usr => {
        if(usr != null){
          this.userCourses = usr.courses;
        }
   });
  }
}





