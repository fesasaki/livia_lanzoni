import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { Service1Component } from './service-1/service-1.component';
import { Service2Component } from './service-2/service-2.component';
import { Service3Component } from './service-3/service-3.component';
import { Service4Component } from './service-4/service-4.component';


@NgModule({
  declarations: [
    HomeComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    GoogleMapsModule
  ]
})
export class UserModule { }
