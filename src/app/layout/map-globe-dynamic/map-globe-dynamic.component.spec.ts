import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobeDynamicComponent } from './map-globe-dynamic.component';

describe('MapGlobeDynamicComponent', () => {
  let component: MapGlobeDynamicComponent;
  let fixture: ComponentFixture<MapGlobeDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobeDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobeDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
