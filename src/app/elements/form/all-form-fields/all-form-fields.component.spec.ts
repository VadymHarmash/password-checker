import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFormFieldsComponent } from './all-form-fields.component';

describe('AllFormFieldsComponent', () => {
  let component: AllFormFieldsComponent;
  let fixture: ComponentFixture<AllFormFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFormFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
