import { OpinionUser, Courses, OpinionCourse } from './../../../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';
import { Router } from '@angular/router';
import { useAnimation } from '@angular/core/src/animation/dsl';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-note-teacher',
  templateUrl: './note-teacher.component.html',
  styleUrls: ['./note-teacher.component.css']
})
export class NoteTeacherComponent implements OnInit {
  noteTemplate = new TemplateNoteUser();
  isShowNoteTeacher = false;
  courseName: string;
  idUserWhoRating;
  coursesStudent: Array<Courses> = new Array;
  courseOwner: Array<User> = new Array;
  constructor(private userService: UserService, private router: Router,private cookieService: CookieService) { }

  ngOnInit() {
    this.getUserCourses();
    this.idUserWhoRating = this.cookieService.get('id');
  }
  getUserCourses()  {
    const user = <User>{};
    var username = this.cookieService.get('username');
    this.userService.getUserByUserName(username).subscribe(usr => {
        if(usr != null){
          this.coursesStudent = usr.studentCourses;
        }
        this.getCourseOwner();
   });

  }
  getCourseOwner()
  {
    console.log(this.coursesStudent);
    for (let course of this.coursesStudent) {
    this.userService.getCourseOwnerByIdCourse(course.id).subscribe(usr => {
      if(usr!=null){
        this.courseOwner.push(usr);

      }
  });
}
}
  setUserCoursesNoteDetail(course: Courses)
  {
    event.stopPropagation();
    this.courseName = course.name;
    this.noteTemplate.idCourse = course.id;
    this.noteTemplate.courseName = course.name;
    this.isShowNoteTeacher = true;
  }
  closeLoginWindow()
  {
    this.isShowNoteTeacher = false;
  }
  showUserDetail(idCourse: number) {

    this.router.navigate(['/main-detail-user', idCourse]);
  }
  setNote(note: number)
  {
  this.noteTemplate.note =  note;
  }
  addNote(content: string)
  {
    const opinionCourse = <OpinionCourse>{};
    opinionCourse.content = content;
    opinionCourse.value = this.noteTemplate.note;
    opinionCourse.raterUser = this.idUserWhoRating;
    const course = <Courses>{};
    course.id = this.noteTemplate.idCourse;
    this.userService.addOpinionToCourse(opinionCourse,course.id).subscribe();
  }


}
class TemplateNoteUser
{
  constructor(public note?: number, public idCourse?: number, public courseName?: string) {}
}

