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
import { MapGlobeDrillComponent } from './map-globe-drill/map-globe-drill.component';
import { MapGlobeProjectionComponent } from './map-globe-projection/map-globe-projection.component';
import { MapGlobeRotatingCircleComponent } from './map-globe-rotating-circle/map-globe-rotating-circle.component';
import { MapGlobePinBulletsComponent } from './map-globe-pin-bullets/map-globe-pin-bullets.component';
import { MapGlobePieChartsComponent } from './map-globe-pie-charts/map-globe-pie-charts.component';
import { MapGlobeGroupedComponent } from './map-globe-grouped/map-globe-grouped.component';
import { TermsUseComponent } from './terms-use/terms-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { EclytPlusComponent } from './eclyt-plus/eclyt-plus.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SurveyComponent } from './survey/survey.component';
import { ObservationComponent } from './observation/observation.component';
import { ServiceComponent } from './service/service.component';
import { EpiComponent } from './epi/epi.component';

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
    MapGlobePulsatingBulletsComponent,
    MapGlobeDrillComponent,
    MapGlobeProjectionComponent,
    MapGlobeRotatingCircleComponent,
    MapGlobePinBulletsComponent,
    MapGlobePieChartsComponent,
    MapGlobeGroupedComponent,
    TermsUseComponent,
    PrivacyPolicyComponent,
    EclytPlusComponent,
    AnalysisComponent,
    SurveyComponent,
    ObservationComponent,
    ServiceComponent,
    EpiComponent

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CommanModule,
    CarouselModule 
  ]
})
export class LayoutModule { }
