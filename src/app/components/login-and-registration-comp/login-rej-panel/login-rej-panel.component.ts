import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../http-services/UserService';



@Component({
  selector: 'app-login-rej-panel',
  templateUrl: './login-rej-panel.component.html',
  styleUrls: ['./login-rej-panel.component.css']
})
export class LoginRejPanelComponent implements OnInit {
  ngOnInit(): void {
  }


  isShowLoginComponent = false;
  isShowRegisterComponent = false;

  constructor(private httpService: UserService) {
  }

  openRegisterComponent(){
   this.isShowRegisterComponent = true;
   this.isShowLoginComponent = false;

 }

  openLoginComponent(){
   this.isShowLoginComponent = true;
   this.isShowRegisterComponent = false;
 }
 checkOpenOrCloseLoginWindow(event)
 {
     if (event === false) {
     this.isShowLoginComponent = false;
     }
 }
 checkOpenOrCloseRegisterWindow(event)
 {
   if (event === false) {
     this.isShowRegisterComponent = false;
     }
 }
}
export interface User {
 firstName: string;
 lastName?: string;
 email?: string;
 username?: string;
 password?: string;
 role: Roles;
 courses:Courses;
 isPremium? : boolean;
 isBlocked? : boolean;
}

export interface Roles {
 id: number;
 name: string;
}

export interface Courses {
  id: number;
  name: string;
 }


