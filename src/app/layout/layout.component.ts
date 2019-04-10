import { Component } from '@angular/core';
import { UserService } from '../http-services/UserService';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  userNameCookie: string = this.cookieService.get('username');
constructor(private cookieService: CookieService)
{

}
}




