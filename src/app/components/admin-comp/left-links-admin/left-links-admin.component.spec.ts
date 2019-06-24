import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftLinksAdminComponent } from './left-links-admin.component';

describe('LeftLinksAdminComponent', () => {
  let component: LeftLinksAdminComponent;
  let fixture: ComponentFixture<LeftLinksAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftLinksAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftLinksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
