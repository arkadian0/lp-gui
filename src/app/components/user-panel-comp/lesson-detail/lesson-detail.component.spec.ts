import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDetailComponent } from './lesson-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LessonDetailComponent', () => {
  let component: LessonDetailComponent;
  let fixture: ComponentFixture<LessonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[ReactiveFormsModule],
      declarations: [ LessonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
