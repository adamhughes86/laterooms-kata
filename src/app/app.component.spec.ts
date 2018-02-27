import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroComponent
      ],
      providers: [
        DataService
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
