import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclytPlusComponent } from './eclyt-plus.component';

describe('EclytPlusComponent', () => {
  let component: EclytPlusComponent;
  let fixture: ComponentFixture<EclytPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EclytPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EclytPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
