import { User } from './../login-rej-panel/login-rej-panel.component';
import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../../http-services/UserService';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginAuthorization = new TemplateAuthorization();

  @Output()
  isOpenLoginWindow = new EventEmitter<boolean>();
  ifUserExist = true;
  constructor(private userService: UserService, private cookieService: CookieService ) { }

  ngOnInit() {
  }
  onSubmit()
  {
    const user = <User>{};
    user.username = this.loginAuthorization.login;
    user.password = this.loginAuthorization.password;
   this.userService.getUser(user).subscribe(usr => {
        if (usr == null) {
          this.ifUserExist = false;
        }
        if(usr != null){
          this.cookieService.set('username', usr.username);
          this.cookieService.set('firstName', usr.firstName);
          this.cookieService.set('lastName', usr.lastName);
          this.cookieService.set('email', usr.email);
          this.cookieService.set('password', usr.password);
          this.isOpenLoginWindow.emit(false);
          window.location.reload();
        }
   });
    }

  closeLoginWindow() {
    this.isOpenLoginWindow.emit(false);
  }
}

class TemplateAuthorization
{
  constructor(public login?: string, public password?: string) {}
}


