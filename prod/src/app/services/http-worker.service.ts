import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerService {

  private url = 'http://netch-env-1.eba-2jpxc2x7.eu-central-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) {}

  public getProgress() {
    return this.http.get(`${this.url}/admin/api/progress/active`, this.getHeaders())
  }

  public postProgress(options: any) {
    return this.http.post(`${this.url}/admin/api/progress/change`, options, this.getHeaders())
  }

  public getActiveBriefs() {
    return this.http.get(`${this.url}/admin/api/briefs/active`, this.getHeaders())
  }

  public removeBrief(id: number) {
    return this.http.delete(`${this.url}/admin/api/briefs/${id}`, this.getHeaders())
  }

  public getTextContentAll() {
    return this.http.get(`${this.url}/api/front/allText`)
  }

  public getTextContent(name: string) {
    return this.http.get(`${this.url}/api/front/textContent/${name}`)
  }

  public postTextContent(options: any) {
    return this.http.post(`${this.url}/admin/api/textContent/add`, options, this.getHeaders())
  }

  public removeTextContent(id: number) {
    return this.http.delete(`${this.url}/admin/api/textContent/${id}`, this.getHeaders())
  }

  public getFeedback() {
    return this.http.get(`${this.url}/admin/api/feedback`, this.getHeaders())
  }

  public postFeedback(options: any) {
    return this.http.post(`${this.url}/api/feedback`, options)
  }

  public getImages(name: any) {
    return this.http.get(`${this.url}/api/front/imageContent/${name}`, this.getHeaders())
  }

  public postImages(options: any) {
    return this.http.post(`${this.url}/admin/api/imageContent/add`, options, this.getHeaders())
  }

  public removeImages(id: number) {
    return this.http.delete(`${this.url}/admin/api/imageContent/${id}`, this.getHeaders())
  }

  public postRegistration(options: any) {
    return this.http.post(`${this.url}/api/registration`, options)
  }

  public postLogin(options: any) {
    return this.http.post(`${this.url}/login`, options, {observe: 'response'})
  }

  public setLocal(token: string) { localStorage.setItem('JWT_TOKEN', token) }
  public getLocal() { return localStorage.getItem('JWT_TOKEN') }
  public getHeaders() { return {
    headers: new HttpHeaders({ Authorization: this.getLocal() as string,}),
  }}

}
