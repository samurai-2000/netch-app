import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpWorkerService } from 'src/app/services/http-worker.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public adminActive = false

  public logPass!: string
  public logEmail!: string

  constructor(private httpWorker: HttpWorkerService) {}

  ngOnInit(): void {

  }

  public postLogin() {
    let options = {
      username: this.logEmail,
      password: this.logPass,
    }
    this.httpWorker.postLogin(options).subscribe((res) => {
      console.log(res.headers.get('Authorization'))
    })
  }

  public test() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ2YWxkMXNsMHZlLjAwQGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJBRE1JTiJ9XSwiaWF0IjoxNjE3MDQ1Mjc2LCJleHAiOjE2MTgxODU2MDB9.XXLibXhtdHRON77QXezde1dGMRvxrg_8XSWFHilYfYUjVYcE5_qCL_SjA3Lbru8H'
      })
    }
    
    this.httpWorker.Test(httpOptions).subscribe((res) => {
      console.log(res)
    })
  }
  

}
