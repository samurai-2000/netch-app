import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private url = 'http://netch.eu-central-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) { }

  public getTrack(id: number) {
    return this.http.get(`${this.url}/api/progress/${id}`)
  }

  public setLocalTrack(track: number) { 
    localStorage.setItem('TRACK', String(track))
  }

  public getLocalTrack() {
    return localStorage.getItem('TRACK')
  }
}
