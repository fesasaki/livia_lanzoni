import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    GoogleMapsModule
  ]
})
export class UserModule { }
