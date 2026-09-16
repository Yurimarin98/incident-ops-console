import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from './pages';
import { ConsultIncidents } from './consult-incidents/consult-incidents';

export const routes: Routes = [
  {
    path: '',
    component: Pages,
    children: [
      {
        path: 'list',
        component: ConsultIncidents
      }
    ]
  },
  {
    path: '',
    redirectTo: `list`,
    pathMatch: 'prefix'
  },
  {
    path: '**',
    redirectTo: `list}`,
    pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
