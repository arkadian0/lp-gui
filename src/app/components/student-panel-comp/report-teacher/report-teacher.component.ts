import { Component, OnInit } from '@angular/core';
import { User, ReportUser } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-report-teacher',
  templateUrl: './report-teacher.component.html',
  styleUrls: ['./report-teacher.component.css']
})
export class ReportTeacherComponent implements OnInit {
  reportTemplate = new TemplateReportUser();
  firstAndLastName: string;
  isShowNoteTeacher = false;
  users: User;
  ROLE_TEACHER_ID = 2;
  constructor(private userService: UserService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.getUsersFilterBySubject();
  }

  getUsersFilterBySubject()  {
    const user = <User>{};
    this.userService.getUsersByRole(this.ROLE_TEACHER_ID).subscribe(usr => {
        if(usr != null) {
          this.users = usr;
        }
   });
  }
  setNameLastNameAndLogin(user: User)
  {
    event.stopPropagation()
    this.reportTemplate.usernameReportingUser = user.username;
    this.reportTemplate.idUserWhoAddReport = parseInt(this.cookieService.get('id'));
    this.firstAndLastName = user.firstName + ' ' + user.lastName;
    this.isShowNoteTeacher = true;
  }
  closeLoginWindow()
  {
    this.isShowNoteTeacher = false;
  }
  showUserDetail(idUser: number) {

    this.router.navigate(['/main-detail-user', idUser]);
  }
  addReport(content: string)
  {
    const reportUser = <ReportUser>{};
    reportUser.description = content;
    const user = <User>{};
    user.id = this.reportTemplate.idUserWhoAddReport;
    reportUser.reportingUser = user;
    this.userService.addReport(reportUser, this.reportTemplate.usernameReportingUser).subscribe();
  }
}
class TemplateReportUser
{
  constructor(public idUserWhoAddReport?: number , public usernameReportingUser?: string ) {}
}




