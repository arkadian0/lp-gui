import { User } from './../../../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { CookieService } from 'ngx-cookie-service';
import { Lesson } from '../../../models/UserModel';

@Component({
  selector: 'app-right-view-add-lesson',
  templateUrl: './right-view-add-lesson.component.html',
  styleUrls: ['./right-view-add-lesson.component.css']
})
export class RightViewAddLessonComponent implements OnInit {


  lessonTemplate = new TemplateAddLesson();
  ifCourseAdded;
  isShowSuccessfullCreate = false;
  constructor(private userService: UserService, private cookieService: CookieService ) { }

  ngOnInit() {
  }

  onSubmit()
  {

    const user = <User>{};
    const lesson = <Lesson>{};
    lesson.name = this.lessonTemplate.lessonName;
    lesson.cost = this.lessonTemplate.cost;
    lesson.city = this.lessonTemplate.city;
    lesson.description = this.lessonTemplate.description;
    user.id = parseInt(this.cookieService.get('id'));
    lesson.user = user;
    this.userService.createLesson(lesson).subscribe(isCreated =>
      {
      if(isCreated){
        this.isShowSuccessfullCreate = true;
      setTimeout(() => {
        this.isShowSuccessfullCreate = false;
        }, 2000 );
      }
  })
}
}
class TemplateAddLesson
{
  constructor(public lessonName?: string, public cost?: number, public city?: string,  public description?: string  ) {}
}

