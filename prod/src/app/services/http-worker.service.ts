import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerService {

  private url = 'http://netch.eu-central-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) { }

  public getTextContentAll() {
    return this.http.get(`${this.url}/api/front/allText`)
  }

  public getTextContent(name: string) {
    return this.http.get(`${this.url}/api/front/textContent/${name}`)
  }

  public postTextContent(content: string) {
    
  }

  public removeTextContent(id: number) {

  }

  public postRegistration(options: any) {
    return this.http.post(`${this.url}/api/registration`, options)
  }

  public postLogin(options: any) {
    return this.http.post(`${this.url}/login`, options, {observe: 'response'})
  }

  public Test(options: any) {
    return this.http.get(`${this.url}/admin/api/feedback`, options)
  }

}
