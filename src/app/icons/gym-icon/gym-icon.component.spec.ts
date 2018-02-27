import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymIconComponent } from './gym-icon.component';

describe('GymIconComponent', () => {
  let component: GymIconComponent;
  let fixture: ComponentFixture<GymIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
