import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-user-panel-menu',
  templateUrl: './user-panel-menu.component.html',
  styleUrls: ['./user-panel-menu.component.css']
})
export class UserPanelMenuComponent implements OnInit {
  isShowUserMenu = false;
  whichUserIsActuallyLogged:string;
  constructor(private cookieService: CookieService, private router: Router) { }
  userNameCookie: string = this.cookieService.get('username');
  ngOnInit() {
    const roleId = this.cookieService.get('roleId');
    if(roleId === '1')
    {
      this.whichUserIsActuallyLogged = 'U';
    }
    if(roleId === '2')
    {
      this.whichUserIsActuallyLogged = 'N';
    }
    if(roleId === '3')
    {
      this.whichUserIsActuallyLogged = 'A';
    }
  }

  logoutUser(){
    this.cookieService.delete('username');
    setTimeout(() => {
      window.location.reload();
      }, 50 );
  }
  showMenuUser(){
this.isShowUserMenu = true;
  }
  hideMenuUser(){
this.isShowUserMenu = false;
  }


}
