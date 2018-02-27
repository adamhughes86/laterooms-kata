import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDownIconComponent } from './arrow-down-icon.component';

describe('ArrowDownIconComponent', () => {
  let component: ArrowDownIconComponent;
  let fixture: ComponentFixture<ArrowDownIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowDownIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowDownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an icon', async(() => {
    const fixture = TestBed.createComponent(ArrowDownIconComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('svg'));
  }));
});
