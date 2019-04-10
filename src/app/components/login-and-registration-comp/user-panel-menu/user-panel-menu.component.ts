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
  constructor(private cookieService: CookieService, private router: Router) { }
  userNameCookie: string = this.cookieService.get('username');
  ngOnInit() {
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
