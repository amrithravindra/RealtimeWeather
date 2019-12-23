import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from '../services/weather.service';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastComponent ],
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
