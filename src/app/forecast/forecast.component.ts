import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  city: string;
  dateToday: Date;
  Forecast: any = <any>{};
  message: string;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.city = 'Toronto';
    this.dateToday = new Date();
    
    this.searchForecast(this.city);
  }

  searchForecast(city: string){
    this.message = '';
    this.Forecast = {};
    this.weatherService.getForecast(city)
    .subscribe(result => {
      this.Forecast = result;
      console.log(this.Forecast);
    }, error => {
      if (error.error && error.error.message) {
        alert(error.error.message);
        this.message = error.error.message;
        return;
      }
      alert('Failed to get weather !');
    }, () => {
    })

  }

  resultFound(){
    return Object.keys(this.Forecast).length > 0;
  }
  }


