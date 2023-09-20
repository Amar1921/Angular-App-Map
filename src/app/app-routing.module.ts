import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {MapComponent} from "./map/map.component";
import {PlanComponent} from "./plan/plan.component";

const routes: Routes = [
  {
    path : '',
    component: MapComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  },{
    path : 'plan',
    component: PlanComponent
  },
  {
    path : '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
