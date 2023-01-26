import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobeRotatingComponent } from './map-globe-rotating.component';

describe('MapGlobeRotatingComponent', () => {
  let component: MapGlobeRotatingComponent;
  let fixture: ComponentFixture<MapGlobeRotatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobeRotatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobeRotatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
