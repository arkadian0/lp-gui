import { Component, OnInit } from '@angular/core';
import { Courses, User } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {

  constructor(private userService: UserService, private cookieService: CookieService) { }
  userCourses : Courses[];
  ngOnInit() {
    this.getUserCourses();
  }

  getUserCourses()  {
    const username = this.cookieService.get('username');
    this.userService.getUserByUserName(username).subscribe(usr => {
        if(usr != null){
          this.userCourses = usr.studentCourses;
        }
   });
  }
}
