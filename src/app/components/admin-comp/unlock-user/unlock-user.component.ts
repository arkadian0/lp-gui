import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.css']
})
export class UnlockUserComponent implements OnInit {
  firstAndLastName: string;
  isShowDeleteUser = false;
  username: string;
  users: User;
  isDeletedUserSuccessfull = false;
  constructor(private userService: UserService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers()  {
    const user = <User>{};
    this.userService.getUsersForSearch().subscribe(usr => {
        if(usr != null){
          this.users = usr;
        }
   });
  }
  setUserDetail(user: User)
  {
    event.stopPropagation();
    this.username = user.username;
    this.firstAndLastName = user.firstName + ' ' + user.lastName;
    this.isShowDeleteUser = true;
  }
  closeLoginWindow()
  {
    this.isShowDeleteUser = false;
  }
  cancelAction() {
    this.isShowDeleteUser = false;
  }
  showUserDetail(idUser: number) {
    this.router.navigate(['/main-detail-user', idUser]);
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
  unlockUser()
  {
    const user = <User>{};
    user.blocked = false;
    this.userService.updateUser(this.username, user).subscribe();
  }
}
