import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixCommentSectionComponent } from './six-comment-section.component';

describe('SixCommentSectionComponent', () => {
  let component: SixCommentSectionComponent;
  let fixture: ComponentFixture<SixCommentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixCommentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixCommentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
