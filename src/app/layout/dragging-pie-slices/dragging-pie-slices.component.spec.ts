import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggingPieSlicesComponent } from './dragging-pie-slices.component';

describe('DraggingPieSlicesComponent', () => {
  let component: DraggingPieSlicesComponent;
  let fixture: ComponentFixture<DraggingPieSlicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggingPieSlicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraggingPieSlicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
