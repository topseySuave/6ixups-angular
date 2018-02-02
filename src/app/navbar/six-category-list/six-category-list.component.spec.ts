import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixCategoryListComponent } from './six-category-list.component';

describe('SixCategoryListComponent', () => {
  let component: SixCategoryListComponent;
  let fixture: ComponentFixture<SixCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
