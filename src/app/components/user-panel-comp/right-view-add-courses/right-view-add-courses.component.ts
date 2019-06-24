import { Courses, User} from './../../../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from '../../../models/UserModel';


@Component({
  selector: 'app-right-view-add-courses',
  templateUrl: './right-view-add-courses.component.html',
  styleUrls: ['./right-view-add-courses.component.css']
})
export class RightViewAddCoursesComponent implements OnInit {

  subjectTemplate = new TemplateAddCourses();
  ifCourseAdded;
  correctlyCreateCourse = false;
  allSubjects: Subject;
  constructor(private userService: UserService, private cookieService: CookieService ) { }

  ngOnInit() {
    this.getAllSubjects();
  }
  getAllSubjects()
  {
    this.userService.getSubjects().subscribe(sub => {
      if (sub != null) {
        this.allSubjects = sub;
      }
 });
  }
  onSubmit()
  {

    const course = <Courses>{};
    const subject = <Subject>{};
    const username = this.cookieService.get('username');
    course.description = this.subjectTemplate.description;
    course.name = this.subjectTemplate.courseName;
    subject.id = this.subjectTemplate.subjectId;
    course.subject = subject;
    this.userService.createCourse(course,username).subscribe(isCreated =>
      {
        if(isCreated)
          this.correctlyCreateCourse = true;
          setTimeout(() => {
        this.correctlyCreateCourse = false;
        }, 2500)
      });
  }
}
class TemplateAddCourses
{
  constructor(public courseName?: string, public subjectId?: number , public description?: string ) {}
}

