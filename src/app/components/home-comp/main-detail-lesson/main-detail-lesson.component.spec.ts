import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailLessonComponent } from './main-detail-lesson.component';

describe('MainDetailLessonComponent', () => {
  let component: MainDetailLessonComponent;
  let fixture: ComponentFixture<MainDetailLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDetailLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetailLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
