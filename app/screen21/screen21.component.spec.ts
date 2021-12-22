import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen21Component } from './screen21.component';

describe('Screen21Component', () => {
  let component: Screen21Component;
  let fixture: ComponentFixture<Screen21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
