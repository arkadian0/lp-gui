import { OpinionCourse } from './../../../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { User, Courses } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main-detail-user',
  templateUrl: './main-detail-user.component.html',
  styleUrls: ['./main-detail-user.component.css']
})
export class MainDetailUserComponent implements OnInit {

  user: User;
  courseUser: User;
  course: Courses;
  userCourses: Courses;
  courseId: number;
  note: number;
  opinions: OpinionCourse;
  isShowJoinCourseButton = true;
  username: string;
  constructor(private userService: UserService, private router: Router,private route: ActivatedRoute,private cookieService: CookieService ) { }

  ngOnInit() {
    this.username = this.cookieService.get("username");
    this.route.params.subscribe(params => {
      this.courseId = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
      this.getCourseById(this.courseId);

}

getCourseById(courseId: number)  {
    this.userService.getCourse(courseId).subscribe(course => {
        if(course != null){
          this.course = course;
        }
        this.getCourseOwner();
        this.getCourseOpinions();
        this.getNoteForCourse();


   });
  }
  getNoteForCourse() {

      this.userService.getCourseRatingByIdCourse(this.courseId).subscribe(note => {
        if(note!=null){
          this.note = note;
        }
    });
}
  getCourseOwner()
  {

    this.userService.getCourseOwnerByIdCourse(this.courseId).subscribe(usr => {
      if(usr!=null){
        this.user = usr;
        this.userCourses = usr.courses;
      }
      this.checkUserBelongToCourse();
  });

}
getCourseOpinions() {
  this.userService.getOpinionForCourse(this.courseId).subscribe(opinions => {
    if(opinions != null) {
      this.opinions = opinions;
    }
});
}
showUserDetail(idCourse)
{
  this.router.navigate(['/main-detail-user', idCourse])
  .then(() => {
    window.location.reload();
  });
}
checkUserBelongToCourse()
{

  this.userService.getUserByUserName(this.username).subscribe(usr => {
    if(usr!=null){
      const idRoli = this.cookieService.get("roleId");
      if(!idRoli){
      this.isShowJoinCourseButton = false;
      }
      if(idRoli === '2'){
      this.isShowJoinCourseButton= false;
      }
      if(idRoli === '3'){
      this.isShowJoinCourseButton= false;
    }
      for (let studentCourse of usr.studentCourses) {
      if(studentCourse.id == this.courseId )
      {
        this.isShowJoinCourseButton = false;
      }
    }
    }
  });
}
joinStudentToCourse()
{
   this.userService.joinStudentToCourse(this.username,this.course).subscribe(result => {
    if(result== 1){
      this.isShowJoinCourseButton = false;
    }
  })
  window.location.reload();

}
}
