import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatFiltersComponent } from './stat-filters.component';

describe('StatFiltersComponent', () => {
  let component: StatFiltersComponent;
  let fixture: ComponentFixture<StatFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
