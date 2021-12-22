import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen14Component } from './screen14.component';

describe('Screen14Component', () => {
  let component: Screen14Component;
  let fixture: ComponentFixture<Screen14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
