import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingIconComponent } from './parking-icon.component';

describe('ParkingIconComponent', () => {
  let component: ParkingIconComponent;
  let fixture: ComponentFixture<ParkingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
