import { Component, OnInit } from '@angular/core';
import { HttpWorkerService } from 'src/app/services/http-worker.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public adminActive = false // open admin page
  public toggle = false // toggle login / registration
  public feedback!: any[] // feedback data
  public briefs!: any[] // briefs data
  public progress!: any[] // progress data
  public logVals = { // login values
    username: '',
    password: '',
  }
  public regVals = { // registration values
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }

  constructor(private httpWorker: HttpWorkerService) {}

  ngOnInit(): void {
    this.getToken()
  }

  // sending a login and requesting a field with a token
  public postLogin() {
    this.httpWorker.postLogin(this.logVals)
    .subscribe((res: any) => {
      this.httpWorker.setLocal(res.headers.get('authorization'))
      this.getToken()
    })
  }

  // sending a registration
  public postRegistration() {
    this.httpWorker.postRegistration(this.regVals)
    .subscribe(() => this.toggle = false)
  }

  // checking for token availability
  public getToken() {
    this.adminActive = this.httpWorker.getLocal() != null;
  }

  // requesting all information from the server
  public getAllFeedback() {
    this.httpWorker.getFeedback()
    .subscribe((res: any) => this.feedback = res)
  }

  // requesting all information from the server
  public getAllBriefs() {
    this.httpWorker.getActiveBriefs()
    .subscribe((res: any) => this.briefs = res)
  }

  // requesting all information from the server
  public getProgress() {
    this.httpWorker.getProgress()
    .subscribe((res: any) => this.progress = res)
  }

  public check(item: any) {
    item.active = !item.active;
  }




}
