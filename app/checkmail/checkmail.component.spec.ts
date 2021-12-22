import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmailComponent } from './checkmail.component';

describe('CheckmailComponent', () => {
  let component: CheckmailComponent;
  let fixture: ComponentFixture<CheckmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
