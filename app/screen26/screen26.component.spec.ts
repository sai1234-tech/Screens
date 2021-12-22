import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen26Component } from './screen26.component';

describe('Screen26Component', () => {
  let component: Screen26Component;
  let fixture: ComponentFixture<Screen26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
