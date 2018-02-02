import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixRightSidebarComponent } from './six-right-sidebar.component';

describe('SixRightSidebarComponent', () => {
  let component: SixRightSidebarComponent;
  let fixture: ComponentFixture<SixRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
