import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartLevelTwoComponent } from './pie-chart-level-two.component';

describe('PieChartLevelTwoComponent', () => {
  let component: PieChartLevelTwoComponent;
  let fixture: ComponentFixture<PieChartLevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartLevelTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
