import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-buy-premium',
  templateUrl: './student-buy-premium.component.html',
  styleUrls: ['./student-buy-premium.component.css']
})
export class StudentBuyPremiumComponent implements OnInit {
  isShowBuyPremiumAccountModal = false;
  howManyTimeMessage:string;
  constructor() { }

  ngOnInit() {
  }
  closeLoginWindow() {
    this.isShowBuyPremiumAccountModal = false;
  }
  showBuyPremiumAccountModal(message)
  {
    this.howManyTimeMessage = message;
    this.isShowBuyPremiumAccountModal = true;
  }

}
