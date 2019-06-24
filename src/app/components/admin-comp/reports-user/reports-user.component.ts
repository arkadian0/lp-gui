import { ReportUser } from './../../../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/UserModel';
import { UserService } from '../../../http-services/UserService';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reports-user',
  templateUrl: './reports-user.component.html',
  styleUrls: ['./reports-user.component.css']
})
export class ReportsUserComponent implements OnInit {
  idDeletingUser: number;
  firstAndLastName: string;
  isShowDeleteUser = false;
  username: string;
  users: User;
  reportsUser : ReportUser;
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
    this.idDeletingUser = user.id;
    this.firstAndLastName = user.firstName + ' ' + user.lastName;
    this.reportsUser = user.userReports
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
  deleteUser()
  {
    this.userService.deleteUser(this.username).subscribe(usr => {
        if(usr === 1){
          this.isDeletedUserSuccessfull = true;
          setTimeout(() => {
           this.isShowDeleteUser = false;
           }, 2000 )
        }
   });
  }

}
