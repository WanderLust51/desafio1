import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterTemplateComponent } from './register-template/register-template.component';

const routes: Routes = [
  { path: 'register', component: RegisterTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
