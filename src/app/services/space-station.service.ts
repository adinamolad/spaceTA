import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LocationNote } from '../models/location-note.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceStationService {

  constructor(private http: HttpClient) { }

  public getCoordinates() {
    let url = `http://api.open-notify.org/iss-now.json`;
    return this.http.get<any>(url);
  }

  public saveOnServer(locationNote: LocationNote): Observable<LocationNote[]>{
    let url = `http://localhost:5000/api/Space`;
    
    //console.log(this.http.get<LocationNote[]>(url+'/GetWeatherForecast'));
    return this.http.post<LocationNote[]>(url, locationNote);
  }

  

 
}
