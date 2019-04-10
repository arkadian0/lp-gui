import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelMenuComponent } from './user-panel-menu.component';

describe('UserPanelMenuComponent', () => {
  let component: UserPanelMenuComponent;
  let fixture: ComponentFixture<UserPanelMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
