import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { Router, ActivatedRoute } from '@angular/router';
import { Lesson } from '../../../models/UserModel';

@Component({
  selector: 'app-search-lesson',
  templateUrl: './search-lesson.component.html',
  styleUrls: ['./search-lesson.component.css']
})
export class SearchLessonComponent implements OnInit {

  courseName: string;
  city:string;
  lessons : Lesson;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.courseName = params['courseName'];
   });
   this.findLessons(this.courseName);
  }
  showLessonDetail(idLesson: number) {

    this.router.navigate(['/main-detail-lesson', idLesson]);
  }

  findLessons(courseName)
  {
    this.userService.findLessonByName(courseName).subscribe(lessons =>
      {
        if(lessons != null){
         this.lessons = lessons;
        }
    });
  }

}
