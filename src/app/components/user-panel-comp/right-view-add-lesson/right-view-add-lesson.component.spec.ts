import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightViewAddLessonComponent } from './right-view-add-lesson.component';

describe('RightViewAddLessonComponent', () => {
  let component: RightViewAddLessonComponent;
  let fixture: ComponentFixture<RightViewAddLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightViewAddLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightViewAddLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
