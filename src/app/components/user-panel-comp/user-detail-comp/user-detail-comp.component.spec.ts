import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailCompComponent } from './user-detail-comp.component';

describe('UserDetailCompComponent', () => {
  let component: UserDetailCompComponent;
  let fixture: ComponentFixture<UserDetailCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
