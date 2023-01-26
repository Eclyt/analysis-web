import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobeProjectionComponent } from './map-globe-projection.component';

describe('MapGlobeProjectionComponent', () => {
  let component: MapGlobeProjectionComponent;
  let fixture: ComponentFixture<MapGlobeProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobeProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobeProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
