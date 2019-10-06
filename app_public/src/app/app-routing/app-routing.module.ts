import { LoginComponent } from './../login/login.component';
import { PdfPageViewComponent } from './../pdf-page-view/pdf-page-view.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './../register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
      component: PdfPageViewComponent
  },
  {
    path: 'register',
      component: RegisterComponent
  },
  {
    path: 'login',
      component: LoginComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
