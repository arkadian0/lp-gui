import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightViewBuyPremiumComponent } from './right-view-buy-premium.component';

describe('RightViewBuyPremiumComponent', () => {
  let component: RightViewBuyPremiumComponent;
  let fixture: ComponentFixture<RightViewBuyPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightViewBuyPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightViewBuyPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
