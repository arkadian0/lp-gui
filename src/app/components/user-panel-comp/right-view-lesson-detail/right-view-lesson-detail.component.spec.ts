import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightViewLessonDetailComponent } from './right-view-lesson-detail.component';

describe('RightViewLessonDetailComponent', () => {
  let component: RightViewLessonDetailComponent;
  let fixture: ComponentFixture<RightViewLessonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightViewLessonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightViewLessonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
