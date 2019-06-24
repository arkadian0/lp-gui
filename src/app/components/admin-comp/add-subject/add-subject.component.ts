import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {


  subjectTemplate = new TemplateAddCourses();
  isSubjectAdded = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit()
  {

    const subject = <Subject>{};
    subject.name = this.subjectTemplate.subjectName;
    this.userService.createSubject(subject).subscribe(result=> {
        if(result){
          this.isSubjectAdded = true;
        setTimeout(() => {
          this.isSubjectAdded = false;
          }, 2000 );
        }

    });
  }
}
class TemplateAddCourses
{
  constructor(public subjectName?: string ) {}
}

