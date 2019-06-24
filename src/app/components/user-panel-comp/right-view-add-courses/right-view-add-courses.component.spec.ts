import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightViewAddCoursesComponent } from './right-view-add-courses.component';

describe('RightViewAddCoursesComponent', () => {
  let component: RightViewAddCoursesComponent;
  let fixture: ComponentFixture<RightViewAddCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightViewAddCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightViewAddCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
