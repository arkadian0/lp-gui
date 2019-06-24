import { Roles } from './../../../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { User, OpinionUser, ReportUser } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-report-student',
  templateUrl: './report-student.component.html',
  styleUrls: ['./report-student.component.css']
})
export class ReportStudentComponent implements OnInit {
  reportTemplate = new TemplateReportUser();
  firstAndLastName: string;
  isShowNoteTeacher = false;
  users: User;
  ROLE_STUDENT_ID = 1;
  constructor(private userService: UserService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.getUsersFilterBySubject();
  }

  getUsersFilterBySubject()  {
    const user = <User>{};
    this.userService.getUsersByRole(this.ROLE_STUDENT_ID).subscribe(usr => {
        if(usr != null) {
          this.users = usr;
        }
   });
  }
  findUserByUserName(searchText: string)
  {
    const user = <User>{};
    this.userService.getUserByUserNameForSearch(searchText).subscribe(usr => {
        if(usr != null){
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
  constructor(public firstName?: string,public lastName?: string, public idUserWhoAddReport?: number , public usernameReportingUser?: string ) {}
}
