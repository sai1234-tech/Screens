import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen22Component } from './screen22.component';

describe('Screen22Component', () => {
  let component: Screen22Component;
  let fixture: ComponentFixture<Screen22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Screen22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
