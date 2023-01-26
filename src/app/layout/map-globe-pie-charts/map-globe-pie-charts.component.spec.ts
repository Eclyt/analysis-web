import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobePieChartsComponent } from './map-globe-pie-charts.component';

describe('MapGlobePieChartsComponent', () => {
  let component: MapGlobePieChartsComponent;
  let fixture: ComponentFixture<MapGlobePieChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobePieChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobePieChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
