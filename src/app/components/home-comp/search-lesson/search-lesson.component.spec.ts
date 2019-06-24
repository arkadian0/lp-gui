import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLessonComponent } from './search-lesson.component';

describe('SearchLessonComponent', () => {
  let component: SearchLessonComponent;
  let fixture: ComponentFixture<SearchLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
