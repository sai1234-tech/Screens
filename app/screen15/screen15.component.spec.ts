import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen15Component } from './screen15.component';

describe('Screen15Component', () => {
  let component: Screen15Component;
  let fixture: ComponentFixture<Screen15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
