import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen17Component } from './screen17.component';

describe('Screen17Component', () => {
  let component: Screen17Component;
  let fixture: ComponentFixture<Screen17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
