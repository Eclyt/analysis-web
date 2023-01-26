import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { CommanModule } from '../comman/comman.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ListingComponent } from './listing/listing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MapGlobComponent } from './map-glob/map-glob.component';
import { DraggingPieSlicesComponent } from './dragging-pie-slices/dragging-pie-slices.component';
import { WorldTimeZoneComponent } from './world-time-zone/world-time-zone.component';
import { PieChartLevelTwoComponent } from './pie-chart-level-two/pie-chart-level-two.component';
import { MapGlobeRotatingComponent } from './map-globe-rotating/map-globe-rotating.component';
import { MapGlobeDynamicComponent } from './map-globe-dynamic/map-globe-dynamic.component';
import { MapGlobePulsatingBulletsComponent } from './map-globe-pulsating-bullets/map-globe-pulsating-bullets.component';
import { MapGlobeWorkingHoursComponent } from './map-globe-working-hours/map-globe-working-hours.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListingComponent,
    AboutComponent,
    ContactComponent,
    MapGlobComponent,
    DraggingPieSlicesComponent,
    WorldTimeZoneComponent,
    PieChartLevelTwoComponent,
    MapGlobeRotatingComponent,
    MapGlobeDynamicComponent,
    MapGlobeWorkingHoursComponent,
    MapGlobePulsatingBulletsComponent

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CommanModule,
    CarouselModule 
  ]
})
export class LayoutModule { }
