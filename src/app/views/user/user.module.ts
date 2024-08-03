import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GalleryModule } from 'ng-gallery';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    GoogleMapsModule,
    GalleryModule
  ]
})
export class UserModule { }
