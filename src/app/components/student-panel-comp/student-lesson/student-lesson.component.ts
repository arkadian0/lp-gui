import { LessonDate, LessonDay } from './../../../models/UserModel';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { CookieService } from 'ngx-cookie-service';
import { Lesson } from '../../../models/UserModel';



@Component({
  selector: 'app-student-lesson',
  templateUrl: './student-lesson.component.html',
  styleUrls: ['./student-lesson.component.css']
})
export class StudentLessonComponent implements OnInit {

  constructor(private userService: UserService, private cookieService: CookieService) { }

  isShowAddLesson = false;
  isShowAlertSuccess = false;
  lessonDates: LessonDate;
  lessonDate: LessonDate;
  lessonDays: LessonDay;
  lessonInModal: LessonDate;
  isShowDetailLesson = false;
  dayIndexValue = 1;

  ngOnInit() {
    const idUser = this.cookieService.get('id');
    this.getUserLessonsDetail(parseInt(idUser));
    this.getLessonDays();

  }


  getUserLessonsDetail(idUser: number)  {
    this.userService.getLessonForStudent(idUser).subscribe(lessonDetail =>
      {
        this.lessonDates = lessonDetail;
      });
  }
  getLessonDays()  {
    this.userService.getAllDays().subscribe(days =>
      {
        this.lessonDays = days;
      });
  }
  showDetails(lessonInModal)
  {
    this.isShowDetailLesson = true;
    this.lessonInModal = lessonInModal;
  }
  closeLoginWindow()
  {
 this.isShowDetailLesson = false;
  }
}
