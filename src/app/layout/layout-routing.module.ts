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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
