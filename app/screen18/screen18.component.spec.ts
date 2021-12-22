import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen18Component } from './screen18.component';

describe('Screen18Component', () => {
  let component: Screen18Component;
  let fixture: ComponentFixture<Screen18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
