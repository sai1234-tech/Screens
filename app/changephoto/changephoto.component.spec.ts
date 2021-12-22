import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangephotoComponent } from './changephoto.component';

describe('ChangephotoComponent', () => {
  let component: ChangephotoComponent;
  let fixture: ComponentFixture<ChangephotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangephotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangephotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
