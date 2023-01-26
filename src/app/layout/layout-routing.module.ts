import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MapGlobComponent } from './map-glob/map-glob.component';
import { DraggingPieSlicesComponent } from './dragging-pie-slices/dragging-pie-slices.component';
import { WorldTimeZoneComponent } from './world-time-zone/world-time-zone.component';
import { PieChartLevelTwoComponent } from './pie-chart-level-two/pie-chart-level-two.component';
import { MapGlobeRotatingComponent } from './map-globe-rotating/map-globe-rotating.component';
import { MapGlobeDynamicComponent } from './map-globe-dynamic/map-globe-dynamic.component';
import { MapGlobeWorkingHoursComponent } from './map-globe-working-hours/map-globe-working-hours.component';
import { MapGlobePulsatingBulletsComponent } from './map-globe-pulsating-bullets/map-globe-pulsating-bullets.component';
import { MapGlobeDrillComponent } from './map-globe-drill/map-globe-drill.component';
import { MapGlobeProjectionComponent } from './map-globe-projection/map-globe-projection.component';
import { MapGlobeRotatingCircleComponent } from './map-globe-rotating-circle/map-globe-rotating-circle.component';
import { MapGlobePinBulletsComponent } from './map-globe-pin-bullets/map-globe-pin-bullets.component';
import { MapGlobePieChartsComponent } from './map-globe-pie-charts/map-globe-pie-charts.component';
import { MapGlobeGroupedComponent } from './map-globe-grouped/map-globe-grouped.component';
const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'listing-show',
        component: ListingComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'map-glob',
        component: MapGlobComponent,
    },
    {
        path: 'dragging-pie-slices',
        component: DraggingPieSlicesComponent,
    },
    {
        path: 'world-time-zone',
        component: WorldTimeZoneComponent,
    },
    {
        path: 'pie-chart-level-two',
        component: PieChartLevelTwoComponent,
    },
    {
        path: 'map-globe-rotating',
        component: MapGlobeRotatingComponent,
    },
    {
        path: 'map-globe-dynamic',
        component: MapGlobeDynamicComponent,
    },
    {
        path: 'map-globe-working-hours',
        component: MapGlobeWorkingHoursComponent,
    },
    {
        path: 'map-globe-pulsating-bullets',
        component: MapGlobePulsatingBulletsComponent,
    },
    {
        path: 'map-globe-drill',
        component: MapGlobeDrillComponent,
    },
    {
        path: 'map-globe-projection',
        component: MapGlobeProjectionComponent,
    },
    {
        path: 'map-globe-rotating-circle',
        component: MapGlobeRotatingCircleComponent,
    },
    {
        path: 'map-globe-pin-bullets',
        component: MapGlobePinBulletsComponent,
    },
    {
        path: 'map-globe-pie-charts',
        component: MapGlobePieChartsComponent,
    },
    {
        path: 'map-globe-grouped',
        component: MapGlobeGroupedComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
