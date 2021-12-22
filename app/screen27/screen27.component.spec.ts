import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen27Component } from './screen27.component';

describe('Screen27Component', () => {
  let component: Screen27Component;
  let fixture: ComponentFixture<Screen27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
