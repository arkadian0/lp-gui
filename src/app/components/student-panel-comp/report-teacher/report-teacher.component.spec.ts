import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTeacherComponent } from './report-teacher.component';

describe('ReportTeacherComponent', () => {
  let component: ReportTeacherComponent;
  let fixture: ComponentFixture<ReportTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
