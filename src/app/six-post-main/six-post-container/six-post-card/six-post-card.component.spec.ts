import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixPostCardComponent } from './six-post-card.component';

describe('SixPostCardComponent', () => {
  let component: SixPostCardComponent;
  let fixture: ComponentFixture<SixPostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
