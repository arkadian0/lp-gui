import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRejPanelComponent } from './login-rej-panel.component';

describe('LoginRejPanelComponent', () => {
  let component: LoginRejPanelComponent;
  let fixture: ComponentFixture<LoginRejPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRejPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRejPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
