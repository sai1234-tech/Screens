import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen25Component } from './screen25.component';

describe('Screen25Component', () => {
  let component: Screen25Component;
  let fixture: ComponentFixture<Screen25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
