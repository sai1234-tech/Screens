import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen29Component } from './screen29.component';

describe('Screen29Component', () => {
  let component: Screen29Component;
  let fixture: ComponentFixture<Screen29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
