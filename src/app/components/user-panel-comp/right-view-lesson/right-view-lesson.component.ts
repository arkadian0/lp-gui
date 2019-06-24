import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../../http-services/UserService';
import { Courses, User, Lesson } from '../../../models/UserModel';

@Component({
  selector: 'app-right-view-lesson',
  templateUrl: './right-view-lesson.component.html',
  styleUrls: ['./right-view-lesson.component.css']
})
export class RightViewLessonComponent implements OnInit {
  constructor(private userService: UserService, private cookieService: CookieService) { }
  lessons: Lesson;
  ngOnInit() {
    this.getUserLessons();
  }

  getUserLessons()  {
    const idUser = parseInt(this.cookieService.get('id'));
    this.userService.getLessonForUser(idUser).subscribe(lessons =>
      {
        this.lessons = lessons;
      });
  }
}
