import { Component } from '@angular/core';
import { UserService } from '../http-services/UserService';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  courseName: string;
  userNameCookie: string = this.cookieService.get('username');
  isOpenFilterBox = false;
  isShowAddressField = false;
  templateAddress = new TemplateAddress();
  choiceValue: number = 1;
constructor(private cookieService: CookieService, private route: Router)
{
}

onSubmit()
{
  if(this.choiceValue==1)
    this.route.navigate(['/search-teacher', this.templateAddress.courseName ]);
  if(this.choiceValue==2){
    this.route.navigate(['/search-lesson', this.templateAddress.courseName ]);
  }
  }
openFilterBox(courseName)
{
  this.templateAddress.courseName = courseName;
  this.isOpenFilterBox = true;
}
closeLoginWindow()
  {
  this.isOpenFilterBox = false;
  }
selectChoice(event) {
  this.choiceValue = event.target.value;
  }
}
class TemplateAddress
{
  constructor(public address ?: string, public courseName ?:string) { }
}



