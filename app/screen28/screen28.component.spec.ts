import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen28Component } from './screen28.component';

describe('Screen28Component', () => {
  let component: Screen28Component;
  let fixture: ComponentFixture<Screen28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
