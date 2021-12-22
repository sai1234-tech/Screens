import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen16Component } from './screen16.component';

describe('Screen16Component', () => {
  let component: Screen16Component;
  let fixture: ComponentFixture<Screen16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
