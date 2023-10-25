import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-wars-weather',
  templateUrl: './star-wars-weather.component.html',
  styleUrls: ['./star-wars-weather.component.css']
})
export class StarWarsWeatherComponent implements OnInit{
//Convert adress into lat long: https://geocode.maps.co/search?q={address}
//take lat long and convert to weather: https://api.weather.gov/points/{lat},{lon}
//display different StarWars planent based off temp

locationData: any;
weatherData: any;
locationUrl: string = '';
weatherUrl: string = '';
public constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




}
