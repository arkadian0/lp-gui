import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCointainerComponent } from './student-cointainer.component';

describe('StudentCointainerComponent', () => {
  let component: StudentCointainerComponent;
  let fixture: ComponentFixture<StudentCointainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCointainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCointainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
