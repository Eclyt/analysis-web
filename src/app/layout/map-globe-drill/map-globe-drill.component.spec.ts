import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobeDrillComponent } from './map-globe-drill.component';

describe('MapGlobeDrillComponent', () => {
  let component: MapGlobeDrillComponent;
  let fixture: ComponentFixture<MapGlobeDrillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobeDrillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobeDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
