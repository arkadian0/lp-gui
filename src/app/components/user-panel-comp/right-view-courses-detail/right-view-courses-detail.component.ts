import { Courses, Chapters } from './../../../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../http-services/UserService';

@Component({
  selector: 'app-right-view-courses-detail',
  templateUrl: './right-view-courses-detail.component.html',
  styleUrls: ['./right-view-courses-detail.component.css']
})
export class RightViewCoursesDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService ) { }

  isShowLessonDetails: boolean = false;
  lessonId: number;
  courseId;
  courseLessons: Chapters;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      this.getCourses(this.courseId);
    });


  }
  showLessonDetail(id: number)
  {
  this.lessonId = id;
  this.isShowLessonDetails = true;

  }
  checkOpenOrCloseLessonDetailWindow(event)
  {
    if (event === false) {
      this.isShowLessonDetails = false;
      }
  }
  getCourses(courseId)
  {
    this.userService.getCourse(courseId).subscribe(course => {
      if(course != null){
        this.courseLessons = course.chapters;
      }
 });
  }

}
