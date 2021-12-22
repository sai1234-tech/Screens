import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen23Component } from './screen23.component';

describe('Screen23Component', () => {
  let component: Screen23Component;
  let fixture: ComponentFixture<Screen23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
