import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixCardListComponent } from './six-card-list.component';

describe('SixCardListComponent', () => {
  let component: SixCardListComponent;
  let fixture: ComponentFixture<SixCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
