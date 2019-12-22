import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  city$: Observable<string>;
  city: string;
  currentWeather: any = <any>{};
  message: string;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.city = 'Toronto';
    this.searchWeather(this.city);
  }

  searchWeather(city: string) {
    this.message = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(city)
    .subscribe(result => {
      this.currentWeather = result;
      console.log(this.currentWeather);
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


