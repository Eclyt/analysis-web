import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEnumComponent } from './app-enum.component';

describe('AppEnumComponent', () => {
  let component: AppEnumComponent;
  let fixture: ComponentFixture<AppEnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEnumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
