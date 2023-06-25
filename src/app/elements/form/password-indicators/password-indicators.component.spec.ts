import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordIndicatorsComponent } from './password-indicators.component';

describe('PasswordIndicatorsComponent', () => {
  let component: PasswordIndicatorsComponent;
  let fixture: ComponentFixture<PasswordIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordIndicatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
