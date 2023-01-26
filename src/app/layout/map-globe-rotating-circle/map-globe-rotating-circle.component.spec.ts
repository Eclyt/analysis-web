import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobeRotatingCircleComponent } from './map-globe-rotating-circle.component';

describe('MapGlobeRotatingCircleComponent', () => {
  let component: MapGlobeRotatingCircleComponent;
  let fixture: ComponentFixture<MapGlobeRotatingCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobeRotatingCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobeRotatingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
