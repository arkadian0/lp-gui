
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { CookieService } from 'ngx-cookie-service';
import { Courses, User } from '../../../models/UserModel';
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
    const username = this.cookieService.get('username');
    this.userService.getUserByUserName(username).subscribe(usr => {
        if(usr != null){
          this.userCourses = usr.courses;
        }
   });
  }
}





