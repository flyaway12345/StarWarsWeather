import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-star-wars-weather',
  templateUrl: './star-wars-weather.component.html',
  styleUrls: ['./star-wars-weather.component.css']
})
export class StarWarsWeatherComponent implements OnInit{
//Convert adress into lat long: https://geocode.maps.co/search?q={address}
//take lat long and convert to weather: https://api.weather.gov/points/{lat},{lon}
//display different StarWars planent based off temp
zipcode: string = '19806'
locationData: any;
weatherData: any;
lat: number = 0;
lon: number = 0;
locationUrl: string = 'https://geocode.maps.co/search?q='+this.zipcode+'';
weatherUrl: string = 'https://api.weather.gov/points/{'+this.lat+'},{'+this.lon+'}';
public constructor(private http: HttpClient, private weatherService : WeatherServiceService) {}
getZipcodeWeatherData(){
  let i = 0;

  this.weatherService.getData('https://geocode.maps.co/search?q='+this.zipcode+'').subscribe((data: any)=>this.locationData[0]=data);
  this.weatherService.getData('https://api.weather.gov/points/{'+this.locationData[0].boundingbox.lat+'},{'+this.locationData[0].boundingbox.lon+'}').subscribe((data: any)=>this.weatherData[0]=data);
  console.log(this.locationData);
  console.log(this.weatherData);
  console.log(this.locationUrl);
  console.log(this.weatherUrl);
}
  ngOnInit(): void {
    this.getZipcodeWeatherData();
    throw new Error('Method not implemented.');
  }

  OnClick(){
    this.getZipcodeWeatherData();
  }


}
