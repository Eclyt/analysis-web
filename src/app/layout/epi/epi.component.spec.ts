import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiComponent } from './epi.component';

describe('EpiComponent', () => {
  let component: EpiComponent;
  let fixture: ComponentFixture<EpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
