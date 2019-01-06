import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCanComponent } from './base-can.component';

describe('BaseCanComponent', () => {
  let component: BaseCanComponent;
  let fixture: ComponentFixture<BaseCanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
