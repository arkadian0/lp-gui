
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UserService } from '../../../http-services/UserService';
import { Roles, User } from '../../../models/UserModel';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  ifRegisterSuccess = false;
  roleIndexValue = 1;
  isShowAlertSuccess = false;
  isShowAlertError = false;
  @Output()
  isOpenRegisterWindow = new EventEmitter<boolean>();

  constructor(private userService: UserService ) { }

  ngOnInit() {
  }

  selectRole(event) {
 this.roleIndexValue = event.target.value;
 console.log(this.roleIndexValue);
  }
  closeRegisterWindow() {
    this.isOpenRegisterWindow.emit(false);
  }
  createUser(login: string, password: string, firstName: string, lastName: string, email: string) {
    const user = this.createUserObject(login, password, firstName, lastName, email, this.roleIndexValue);
    this.userService.createUser(user).subscribe(usr => {
     if(usr) {
      this.isShowAlertSuccess = true;
     setTimeout(() => {
      this.isShowAlertSuccess = false;
      this.isOpenRegisterWindow.emit(false);
      }, 2000 )
    }else{
      this.isShowAlertError = true;
      setTimeout(() => {
        this.isShowAlertError = false;
        }, 5000)

    }

    });
  }
createUserObject(login: string, password: string, firstName: string, lastName: string, email: string, roleIndexValue: number): User
{
  const role = <Roles>{};
  role.id = this.roleIndexValue;
  const user = <User>{};
  user.username = login;
  user.password = password;
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.role = role;

  return user;
}
}
