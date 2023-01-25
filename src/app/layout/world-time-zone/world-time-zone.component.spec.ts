import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldTimeZoneComponent } from './world-time-zone.component';

describe('WorldTimeZoneComponent', () => {
  let component: WorldTimeZoneComponent;
  let fixture: ComponentFixture<WorldTimeZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldTimeZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldTimeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
