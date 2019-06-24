import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTeacherComponent } from './note-teacher.component';

describe('NoteTeacherComponent', () => {
  let component: NoteTeacherComponent;
  let fixture: ComponentFixture<NoteTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
