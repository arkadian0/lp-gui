import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailUserComponent } from './main-detail-user.component';

describe('MainDetailUserComponent', () => {
  let component: MainDetailUserComponent;
  let fixture: ComponentFixture<MainDetailUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDetailUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
