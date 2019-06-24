import { Courses } from './../../../models/UserModel';
import { Component, OnInit} from '@angular/core';
import { User } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search-teacher',
  templateUrl: './search-teacher.component.html',
  styleUrls: ['./search-teacher.component.css']
})

export class SearchTeacherComponent implements OnInit {
  user: Array<User> = new Array;
  courses: Courses[];
  courseName: string;
  note: Array<number> = new Array;

  constructor(private userService: UserService, private router: Router,private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.courseName = params['courseName']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
      this.getUsersFilterBySubject(this.courseName);

}

  getUsersFilterBySubject(courseName: string)  {
    this.userService.getCourseByNameForSearch(courseName).subscribe(course => {
        if(course != null){
          this.courses = course;
        }
        this.getCourseOwner();
        this.getNoteForCourse();
   });

  }
  getNoteForCourse() {

    for (let course of this.courses) {

      this.userService.getCourseRatingByIdCourse(course.id).subscribe(note => {
        if(note!=null){
          this.note.push(note);
        }
    });
  }
}
  getCourseOwner()
  {
    for (let course of this.courses) {

    this.userService.getCourseOwnerByIdCourse(course.id).subscribe(usr => {
      if(usr!=null){
        this.user.push(usr);
      }
  });
}
}
  showUserDetail(idCourse: number) {

    this.router.navigate(['/main-detail-user', idCourse]);
  }

}
