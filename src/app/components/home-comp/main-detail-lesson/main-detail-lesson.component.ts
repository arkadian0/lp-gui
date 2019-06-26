import { User } from './../../../models/UserModel';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
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
  city: string;
  lessons: Lesson;
  lessonDate: LessonDate;
  lessonDays: LessonDay;
  lessonDateIdToUpdate: number;
  chosePayment: number;
  isShowSuccessAllert = false;
  isShowWayPayment = false;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idLesson = params['id'];
      this.roleId = parseInt(this.cookieService.get('roleId'));
      this.findLessons(this.idLesson);
      this.findLessonDetail(this.idLesson);
      this.getLessonDays();
   });

  }



  findLessons(idLesson)
  {
    this.userService.getLessonById(idLesson).subscribe(lessons =>
      {
        if (lessons != null){
         this.lessons = lessons;
        }
    });
  }
  findLessonDetail(idLesson)
  {
    this.userService.getLessonDetail(idLesson).subscribe(lessonsDate =>
      {
        console.log(lessonsDate);
        if (lessonsDate != null){
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
  showWayPayment(lessonId)
  {
    this.lessonDateIdToUpdate = lessonId;
    this.isShowWayPayment = true;
  }
  setValueForPayPall()
  {
    this.chosePayment = 1;
  }
  setValueForManualPay()
  {
    this.chosePayment = 2;
  }
  closeLoginWindow()
  {
    this.isShowWayPayment = false;
  }
  joinToLesson()
  {
    const studentId = parseInt(this.cookieService.get('id'));
    const user = <User>{};
    user.id = studentId;
    const lessonDate = <LessonDate>{};
    lessonDate.user = user;
    lessonDate.isFree = 'N';
    if (this.chosePayment === 1)
      lessonDate.payment = 'P';
    if (this.chosePayment === 2)
      lessonDate.payment = 'O';

    this.userService.updateLessonDate(this.lessonDateIdToUpdate, lessonDate).subscribe(isCreated =>
      {
        if(isCreated)
      {
        this.isShowSuccessAllert = true;
      setTimeout(() => {
        this.isShowSuccessAllert = false;
        window.location.reload();
        }, 1600)
      }
    });
  }

}

