import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeFieldComponent } from './age-field.component';

describe('AgeFieldComponent', () => {
  let component: AgeFieldComponent;
  let fixture: ComponentFixture<AgeFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
