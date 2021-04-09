import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BriefService {

  private url = 'http://netch.eu-central-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) { }

  public postBrief(options: any) {
    return this.http.post(`${this.url}/api/brief`, options)
  }
}
