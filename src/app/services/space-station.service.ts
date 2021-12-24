import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpaceStationService {

  constructor(private http: HttpClient) { }

  public getCoordinates() {
    let url = `http://api.open-notify.org/iss-now.json`;
    return this.http.get<any>(url);
  }


 
}
