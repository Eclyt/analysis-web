import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobePinBulletsComponent } from './map-globe-pin-bullets.component';

describe('MapGlobePinBulletsComponent', () => {
  let component: MapGlobePinBulletsComponent;
  let fixture: ComponentFixture<MapGlobePinBulletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobePinBulletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobePinBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
