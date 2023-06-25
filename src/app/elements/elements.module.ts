import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsComponent } from './elements.component';
import { FormComponent } from './form/form.component';
import { NameFieldComponent } from './form/name-field/name-field.component';
import { PasswordFieldComponent } from './form/password-field/password-field.component';
import { AllFormFieldsComponent } from './form/all-form-fields/all-form-fields.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordIndicatorsComponent } from './form/password-indicators/password-indicators.component';
import { PasswordMessagesComponent } from './form/password-messages/password-messages.component';


@NgModule({
  declarations: [
    ElementsComponent,
    FormComponent,
    PasswordFieldComponent,
    NameFieldComponent,
    AllFormFieldsComponent,
    PasswordIndicatorsComponent,
    PasswordMessagesComponent,
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ElementsModule { }
