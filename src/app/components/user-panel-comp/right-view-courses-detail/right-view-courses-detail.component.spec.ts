import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightViewCoursesDetailComponent } from './right-view-courses-detail.component';

describe('RightViewCoursesDetailComponent', () => {
  let component: RightViewCoursesDetailComponent;
  let fixture: ComponentFixture<RightViewCoursesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightViewCoursesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightViewCoursesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
