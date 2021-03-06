import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  userDetail = new TemplateUserDetail();
  constructor(private userService: UserService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getUsetDetail();

  }
  getUsetDetail()
  {
    const username = this.cookieService.get('username');
    this.userService.getUserByUserName(username).subscribe(usr => {
        if(usr != null){
          this.buildTemplateUserDetail(usr);
          if(usr.isPremium)
          this.userDetail.premium = 'Konto Premium';
          else
          this.userDetail.premium = 'Brak Premium';
        }
   });
  }
buildTemplateUserDetail(usr:User)
{
  this.userDetail.email = usr.email;
  this.userDetail.login = usr.username;
  this.userDetail.firstName = usr.firstName;
  this.userDetail.lastName = usr.lastName;
  this.userDetail.rola = usr.role.name;
}
}

class TemplateUserDetail
{
  constructor(
    public login?: string,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public rola?: string,
    public premium?: string ) {}
}
