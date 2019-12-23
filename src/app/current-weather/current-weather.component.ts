import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  city: string;
  dateToday: Date;
  icon: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number
  pressure: number;
  humidity: number;
  wind: number;
  visibility: number;
  sunrise: number;
  sunset: number;
  
  currentWeather: any = <any>{};
  Forecast: any = <any>{};
  message: string;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.city = 'Bellevue';
    this.dateToday = new Date();
    this.searchWeather(this.city);
  }

  searchWeather(city: string) {
    this.message = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(city)
    .subscribe(result => {
      this.currentWeather = result;
      console.log(this.currentWeather);
      this.temp = (this.currentWeather.main.temp - 273);
      this.feels_like= (this.currentWeather.main.feels_like - 273);
      this.temp_min = (this.currentWeather.main.temp_min - 273);
      this.temp_max = (this.currentWeather.main.temp_max - 273);
      this.wind = this.currentWeather.wind.speed;
      this.humidity = this.currentWeather.main.humidity;
      this.pressure = this.currentWeather.main.pressure;
      this.visibility = (this.currentWeather.visibility)/1000;
      this.sunrise = (this.currentWeather.timezone + this.currentWeather.sys.sunrise + 27500);
      this.sunset = (this.currentWeather.sys.sunset + this.currentWeather.timezone);

      this.currentWeather.weather.forEach(element => { element.main
       this.icon = element.main
      });
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
    return Object.keys(this.currentWeather).length > 0;
  }
  }


