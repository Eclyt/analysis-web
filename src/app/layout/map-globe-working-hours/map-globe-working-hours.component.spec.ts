import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobeWorkingHoursComponent } from './map-globe-working-hours.component';

describe('MapGlobeWorkingHoursComponent', () => {
  let component: MapGlobeWorkingHoursComponent;
  let fixture: ComponentFixture<MapGlobeWorkingHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobeWorkingHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobeWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
