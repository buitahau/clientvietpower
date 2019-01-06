import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColourantsComponent } from './table-colourants.component';

describe('TableColourantsComponent', () => {
  let component: TableColourantsComponent;
  let fixture: ComponentFixture<TableColourantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColourantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColourantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
