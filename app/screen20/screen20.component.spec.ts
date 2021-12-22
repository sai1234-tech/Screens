import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen20Component } from './screen20.component';

describe('Screen20Component', () => {
  let component: Screen20Component;
  let fixture: ComponentFixture<Screen20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
