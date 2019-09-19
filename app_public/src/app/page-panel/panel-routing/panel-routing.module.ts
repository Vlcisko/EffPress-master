import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from '../overview/overview.component';
import { CommentsComponent } from '../comments/comments.component';


const routes: Routes = [
  {
    path: 'overview',
      component: OverviewComponent
  },
  {
    path: 'comments',
      component: CommentsComponent
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
export class PanelRoutingModule { }
