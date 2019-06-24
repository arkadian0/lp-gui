import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBuyPremiumComponent } from './student-buy-premium.component';

describe('StudentBuyPremiumComponent', () => {
  let component: StudentBuyPremiumComponent;
  let fixture: ComponentFixture<StudentBuyPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBuyPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBuyPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
