import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixCardComponent } from './six-card.component';

describe('SixCardComponent', () => {
  let component: SixCardComponent;
  let fixture: ComponentFixture<SixCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
