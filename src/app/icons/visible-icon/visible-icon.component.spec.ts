import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibleIconComponent } from './visible-icon.component';

describe('VisibleIconComponent', () => {
  let component: VisibleIconComponent;
  let fixture: ComponentFixture<VisibleIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
