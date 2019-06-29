import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Weather } from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  public weather: Weather;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getWeather('2487956').subscribe(data => {
      this.weather = data as Weather;
    })
  }
}
