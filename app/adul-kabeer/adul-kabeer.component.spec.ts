import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdulKabeerComponent } from './adul-kabeer.component';

describe('AdulKabeerComponent', () => {
  let component: AdulKabeerComponent;
  let fixture: ComponentFixture<AdulKabeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdulKabeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdulKabeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
