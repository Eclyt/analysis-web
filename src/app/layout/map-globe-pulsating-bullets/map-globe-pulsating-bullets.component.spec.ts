import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlobePulsatingBulletsComponent } from './map-globe-pulsating-bullets.component';

describe('MapGlobePulsatingBulletsComponent', () => {
  let component: MapGlobePulsatingBulletsComponent;
  let fixture: ComponentFixture<MapGlobePulsatingBulletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGlobePulsatingBulletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapGlobePulsatingBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
