import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './elements.component';
import { FormComponent } from './form/form.component';
import { AllFormFieldsComponent } from './form/all-form-fields/all-form-fields.component';

const routes: Routes = [
  {
    path: '',
    component: ElementsComponent,
    children: [
      {
        path: '',
        component: FormComponent,
        children: [
          { path: '', component: AllFormFieldsComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
