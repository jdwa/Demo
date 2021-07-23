import { TreeChartComponent } from './tree-chart/tree-chart.component';

import { HomeDetailComponent } from './home/home-detail/home-detail.component';
import { Home1Component } from './home/home1/home1.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './home/home2/home2.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,
    children: [
      {path: 'home1', component: Home1Component},
      {path: 'home2', component: Home2Component},
      {path: 'home-detail/:nbr', component: HomeDetailComponent}
    ]
  },
  {path: 'second', component: SecondComponent},
  {path: 'tree-chart', component: TreeChartComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
