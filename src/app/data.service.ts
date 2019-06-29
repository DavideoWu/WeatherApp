import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getPlaceId(location: string) {
    return this.http.get('https://www.metaweather.com/api/location/search/?query=' + location);
  }

  public getWeather(woeID: string){
    return this.http.get('https://www.metaweather.com/api/location/' + woeID)
  }
}
