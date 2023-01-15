import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { CommanModule } from '../comman/comman.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ListingComponent } from './listing/listing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListingComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CommanModule,
    CarouselModule 
  ]
})
export class LayoutModule { }
