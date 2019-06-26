import { User, LessonDate } from './../../../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { LessonDay, Lesson } from '../../../models/UserModel';
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
  isShowDetailLesson = false;
  isShowAlertSuccessForUpdate = false;
  templateLesson =  new TemplateLesson();
  lessonDates: LessonDate;
  lessonInModal: LessonDate;
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
    this.isShowDetailLesson = false;
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
  showDetail(lessonInModal)
  {
    this.lessonInModal = lessonInModal;
    this.isShowDetailLesson = true;
  }
 showEditLessonPanel(lesson:LessonDate)
 {
  this.lessonDateToEdit = lesson;
  this.dayIndexValue = lesson.day.id;
  this.isShowUpdateLesson = true;
 }
  onSubmitUpdate(hourFrom, hourTo)
{
  const lessonDate = <LessonDate>{};
  const day = <LessonDay>{};
  lessonDate.hourFrom = hourFrom;
  lessonDate.hourTo = hourTo;
  day.id = this.dayIndexValue;
  lessonDate.day = day;
  console.log(this.lessonDateToEdit.id);
  console.log(lessonDate);
  this.userService.updateLessonDate(this.lessonDateToEdit.id, lessonDate).subscribe(isUpdated =>
    {
      if(isUpdated)
      {
        this.isShowAlertSuccessForUpdate = true;
      setTimeout(() => {
        this.isShowAlertSuccessForUpdate = false;
        this.isShowUpdateLesson = false
        window.location.reload();
        }, 2200)
      }
    });
}
}
class TemplateLesson {
  constructor(public hourFrom?: string, public hourTo?: string) { }
}
