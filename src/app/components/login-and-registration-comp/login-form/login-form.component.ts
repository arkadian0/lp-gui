import { Roles } from './../../../models/UserModel';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../../http-services/UserService';
import { User } from '../../../models/UserModel';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output()
  isOpenLoginWindow = new EventEmitter<boolean>();
  loginAuthorization = new TemplateAuthorization();


  ifUserExist = true;
  isUserBlocked = false;
  userFromFaceBook: any = SocialUser;
  isShowCheckBoxesForFb = false;
  ifUsernameExist = false;
  roleIndexValue = 1;
  user: User;
  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private socialAuthService: AuthService,
    private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.user == null) {
      const user = <User>{};
      user.username = this.loginAuthorization.login;
      user.password = this.loginAuthorization.password;
      this.user = user;
    }
    this.userService.getUser(this.user).subscribe(usr => {
      if (!this.checkIfUserExist(usr)) {
        this.ifUserExist = false;
      }
      else if (usr.blocked) {
        this.isUserBlocked = true;
      }
      else {
        this.setUserToCookieAndRefreshPage(usr);
      }
    });
  }

  closeLoginWindow() {
    this.isOpenLoginWindow.emit(false);
  }
  selectRole(event) {
    this.roleIndexValue = event.target.value;
  }
  public facebookLoginIfUserExist() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (userData) => {
        const user = this.createUserFromFacebook(userData);
        this.userService.getUser(user).subscribe(usr => {
          if (!this.checkIfUserExist(usr)) {
            this.isShowCheckBoxesForFb = true;
            this.user = user;
          }
          else if (usr.blocked) {
            this.isUserBlocked = true;
          }
          else {
            this.setUserToCookieAndRefreshPage(usr);
          }
        });
      }
    );
  }
  facebookLoginIfUserNoExist() {
    this.user.role.id = this.roleIndexValue;
    this.userService.createUser(this.user).subscribe(
      isCreated => {
        if(isCreated){
        this.onSubmit();
        }else
        {
          this.ifUsernameExist = true;
        }
      });
  }
  checkIfUserExist(usr: User): boolean {
    if (usr == null) {
      return false;
    } else {
      return true;
    }
  }

  setUserToCookieAndRefreshPage(user: User) {
    this.cookieService.set('id', user.id.toString());
    this.cookieService.set('username', user.username);
    this.cookieService.set('firstName', user.firstName);
    this.cookieService.set('lastName', user.lastName);
    this.cookieService.set('email', user.email);
    this.cookieService.set('roleId', user.role.id.toString());
    this.isOpenLoginWindow.emit(false);
    window.location.reload();
  }
  createUserFromFacebook(userFb: SocialUser): User {
    const role = <Roles>{};
    role.id = this.roleIndexValue;
    const firstAndLastName = userFb.name.split(' ', 2);
    const user = <User>{};
    user.firstName = firstAndLastName[0];
    user.lastName = firstAndLastName[1];
    user.username = userFb.name;
    user.password = userFb.email;
    user.email = userFb.email;
    user.role = role;
    return user;
  }
}

class TemplateAuthorization {
  constructor(public login?: string, public password?: string) { }
}


