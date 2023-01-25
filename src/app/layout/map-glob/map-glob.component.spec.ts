import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobComponent } from './map-glob.component';

describe('MapGlobComponent', () => {
  let component: MapGlobComponent;
  let fixture: ComponentFixture<MapGlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
