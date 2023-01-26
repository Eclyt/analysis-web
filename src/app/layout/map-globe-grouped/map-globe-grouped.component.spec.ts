import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobeGroupedComponent } from './map-globe-grouped.component';

describe('MapGlobeGroupedComponent', () => {
  let component: MapGlobeGroupedComponent;
  let fixture: ComponentFixture<MapGlobeGroupedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobeGroupedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobeGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
