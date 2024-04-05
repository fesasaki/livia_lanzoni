import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Service1Component } from './service-1/service-1.component';
import { Service2Component } from './service-2/service-2.component';
import { Service3Component } from './service-3/service-3.component';
import { Service4Component } from './service-4/service-4.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'preenchimento-labial', component: Service1Component },
  { path: 'toxina-butulinica', component: Service2Component },
  { path: 'acido-hialuronico', component: Service3Component },
  { path: 'laser-lavieen', component: Service4Component },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
