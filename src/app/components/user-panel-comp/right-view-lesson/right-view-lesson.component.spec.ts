import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightViewLessonComponent } from './right-view-lesson.component';

describe('RightViewLessonComponent', () => {
  let component: RightViewLessonComponent;
  let fixture: ComponentFixture<RightViewLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightViewLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightViewLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
