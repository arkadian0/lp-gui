import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftLinksStudentComponent } from './left-links-student.component';

describe('LeftLinksStudentComponent', () => {
  let component: LeftLinksStudentComponent;
  let fixture: ComponentFixture<LeftLinksStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftLinksStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftLinksStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
