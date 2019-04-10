import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { CookieService } from 'ngx-cookie-service';
import { User, Roles } from '../../login-and-registration-comp/login-rej-panel/login-rej-panel.component';

@Component({
  selector: 'app-right-view-detail',
  templateUrl: './right-view-detail.component.html',
  styleUrls: ['./right-view-detail.component.css']
})
export class RightViewDetailComponent implements OnInit {
  userDetail = new TemplateUserDetail();
  constructor(private userService: UserService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getUsetDetail();

  }
  getUsetDetail()
  {
    const user = <User>{};
    user.username = this.cookieService.get('username');
    user.password = this.cookieService.get('password');
   this.userService.getUser(user).subscribe(usr => {
     console.log(usr);
        if(usr != null){
          console.log(usr.role.name);
          this.userDetail.email = usr.email;
          this.userDetail.login = usr.username;
          this.userDetail.firstName = usr.firstName;
          this.userDetail.lastName = usr.lastName;
          this.userDetail.rola = usr.role.name;
          if(user.isPremium)
          this.userDetail.premium = 'Konto Premium';
          else
          this.userDetail.premium = 'Brak Premium';



        }
   });
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
    public premium?:string ) {}
}

