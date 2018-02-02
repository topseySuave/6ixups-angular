import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixPostMainComponent } from './six-post-main.component';

describe('SixPostMainComponent', () => {
  let component: SixPostMainComponent;
  let fixture: ComponentFixture<SixPostMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixPostMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixPostMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
