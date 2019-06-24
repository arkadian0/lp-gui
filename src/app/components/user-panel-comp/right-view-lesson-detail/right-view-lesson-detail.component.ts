import { User } from './../../../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { LessonDate, LessonDay, Lesson } from '../../../models/UserModel';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-right-view-lesson-detail',
  templateUrl: './right-view-lesson-detail.component.html',
  styleUrls: ['./right-view-lesson-detail.component.css']
})
export class RightViewLessonDetailComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute, private cookieService: CookieService) { }
  isShowUpdateLesson = false;
  isShowAddLesson = false;
  isShowAlertSuccess = false;
  isShowAlertSuccessForUpdate = false;
  templateLesson =  new TemplateLesson();
  lessonDates: LessonDate;
  lessonDate: LessonDate;
  lessonDateToEdit: LessonDate;
  lessonDays: LessonDay;
 dayIndexValue = 1;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getUserLessonsDetail(parseInt(params.get('id')));
    });
    this.getLessonDays();

  }

  getUserLessonsDetail(idLesson: number)  {
    this.userService.getLessonDetail(idLesson).subscribe(lessonDetail =>
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
  showAddLessonPanel()
  {
    this.isShowAddLesson = true;
  }
  closeLoginWindow()
  {
    this.isShowAddLesson = false;
    this.isShowUpdateLesson = false;
  }
  selectRole(event) {
    this.dayIndexValue = event.target.value;
     }
  onSubmit() {
    const lesson = <Lesson>{};
    this.route.paramMap.subscribe(params => {
     lesson.id = parseInt(params.get('id'));
    });
    const day = <LessonDay>{};
    day.id = this.dayIndexValue;
    const lessonDate = <LessonDate>{};
    lessonDate.hourFrom = this.templateLesson.hourFrom;
    lessonDate.hourTo = this.templateLesson.hourTo;
    lessonDate.hourFrom = this.templateLesson.hourFrom;
    lessonDate.isFree = 'T';
    lessonDate.isConfirmed = 'T';
    lessonDate.day = day;
    lessonDate.lesson = lesson;
    this.userService.addLessonDate(lessonDate).subscribe(isAdded =>
    {
      if(isAdded)
      {
        this.isShowAlertSuccess = true;
      setTimeout(() => {
        this.isShowAlertSuccess = false;
        this.isShowAddLesson = false
        window.location.reload();
        }, 2200)
      }
    });
  }
 showEditLessonPanel(lesson:LessonDate)
 {
  this.lessonDateToEdit = lesson;
  this.isShowUpdateLesson = true;
 }
  onSubmitUpdate()
  {

  }
}
class TemplateLesson {
  constructor(public hourFrom?: string, public hourTo?: string) { }
}
