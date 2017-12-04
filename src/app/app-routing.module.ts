import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from './core/constants/constant';
import { PageNotFoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  { path: '', redirectTo: Constants.DASHBOARDROUTE, pathMatch: 'full' },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }