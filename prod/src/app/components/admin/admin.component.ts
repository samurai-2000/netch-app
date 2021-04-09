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
  public logPass!: string // login var password
  public logEmail!: string // login var email
  public feedback!: any[] // feedback information
  public regVals = { // registration vars
    firstname: '',
    lastname: '',
    email: '',
    pass: '',
  }

  constructor(private httpWorker: HttpWorkerService) {}

  ngOnInit(): void {
    this.getToken()
  }

  // sending a login and requesting a field with a token
  public postLogin() {
    let options = {
      username: this.logEmail,
      password: this.logPass,
    }
    this.httpWorker.postLogin(options)
    .subscribe((res: any) => {
      this.httpWorker.setLocal(res.headers.get('authorization'))
      this.getToken()
    })
  }

  // sending a registration
  public postRegistration() {
    let options = {
      firstname: this.regVals.firstname,
      lastname: this.regVals.lastname,
      email: this.regVals.email,
      password: this.regVals.pass,
    }
    this.httpWorker.postRegistration(options).subscribe(() => {
      this.toggle = false
    })
  }

  // checking for token availability
  public getToken() {
    this.adminActive = this.httpWorker.getLocal() != null;
  }

  // requesting all information from the server
  public getAll() {
    this.httpWorker.getFeedback().subscribe((res: any) => this.feedback = res)
  }

  public check(item: any) {
    item.active = !item.active;
  }




}
