import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixCardContainerComponent } from './six-card-container.component';

describe('SixCardContainerComponent', () => {
  let component: SixCardContainerComponent;
  let fixture: ComponentFixture<SixCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
