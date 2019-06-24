import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-view-buy-premium',
  templateUrl: './right-view-buy-premium.component.html',
  styleUrls: ['./right-view-buy-premium.component.css']
})
export class RightViewBuyPremiumComponent implements OnInit {
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
