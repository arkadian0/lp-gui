import { User } from './../../../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { Lesson, LessonDate, LessonDay } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main-detail-lesson',
  templateUrl: './main-detail-lesson.component.html',
  styleUrls: ['./main-detail-lesson.component.css']
})
export class MainDetailLessonComponent implements OnInit {
  roleId: number;
  idLesson: number;
  city:string;
  lessons : Lesson;
  lessonDate : LessonDate
  lessonDays: LessonDay;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,private cookieService: CookieService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.idLesson = params['id'];
      this.roleId = parseInt(this.cookieService.get('roleId'));
      this.findLessons(this.idLesson);
      this.findLessonDetail(this.idLesson)
      this.getLessonDays();
   });

  }

  findLessons(idLesson)
  {
    this.userService.getLessonById(idLesson).subscribe(lessons =>
      {
        if(lessons != null){
         this.lessons = lessons;
        }
    });
  }
  findLessonDetail(idLesson)
  {
    this.userService.getLessonDetail(idLesson).subscribe(lessonsDate =>
      {
        console.log(lessonsDate);
        if(lessonsDate != null){
         this.lessonDate = lessonsDate;
        }
    });
  }
  getLessonDays()  {
    this.userService.getAllDays().subscribe(days =>
      {
        this.lessonDays = days;
      });
  }

  joinToLesson(lessonDateId)
  {
    const studentId = parseInt(this.cookieService.get('id'));
    const user = <User>{};
    user.id = studentId;
    const lessonDate = <LessonDate>{};
    lessonDate.user = user;
    lessonDate.isFree = 'N';
    this.userService.updateLessonDate(lessonDateId, lessonDate).subscribe(isCreated =>
      {
        if(isCreated)
          window.location.reload();
      });
  }
}

