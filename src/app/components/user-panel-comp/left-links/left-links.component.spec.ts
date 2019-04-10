import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftLinksComponent } from './left-links.component';

describe('LeftLinksComponent', () => {
  let component: LeftLinksComponent;
  let fixture: ComponentFixture<LeftLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
