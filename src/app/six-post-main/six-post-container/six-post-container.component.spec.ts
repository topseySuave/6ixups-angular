import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixPostContainerComponent } from './six-post-container.component';

describe('SixPostContainerComponent', () => {
  let component: SixPostContainerComponent;
  let fixture: ComponentFixture<SixPostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixPostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
