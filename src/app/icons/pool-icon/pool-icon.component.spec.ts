import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolIconComponent } from './pool-icon.component';

describe('PoolIconComponent', () => {
  let component: PoolIconComponent;
  let fixture: ComponentFixture<PoolIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an icon', async(() => {
    const fixture = TestBed.createComponent(PoolIconComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('svg'));
  }));
});
