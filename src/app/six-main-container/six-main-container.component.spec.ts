import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixMainContainerComponent } from './six-main-container.component';

describe('SixMainContainerComponent', () => {
  let component: SixMainContainerComponent;
  let fixture: ComponentFixture<SixMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
