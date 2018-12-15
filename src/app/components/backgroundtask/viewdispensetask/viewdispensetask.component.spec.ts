import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDispenseTaskComponent } from './viewdispensetask.component';

describe('ViewdispensetaskComponent', () => {
  let component: ViewDispenseTaskComponent;
  let fixture: ComponentFixture<ViewDispenseTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDispenseTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDispenseTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
