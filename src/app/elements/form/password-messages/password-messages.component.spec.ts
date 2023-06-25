import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordMessagesComponent } from './password-messages.component';

describe('PasswordMessagesComponent', () => {
  let component: PasswordMessagesComponent;
  let fixture: ComponentFixture<PasswordMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
