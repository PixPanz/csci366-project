import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastQuizzesComponent } from './view-past-quizzes.component';

describe('ViewPastQuizzesComponent', () => {
  let component: ViewPastQuizzesComponent;
  let fixture: ComponentFixture<ViewPastQuizzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastQuizzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
