import { Component, OnInit } from '@angular/core';
import { HttpWorkerService } from 'src/app/services/http-worker.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public adminActive = false
  public toggle = false
  public toggleTables = 'feedback'
  public feedback!: any[]
  public briefs!: any[]
  public progress!: any[]
  public logVals = {
    username: '',
    password: '',
  }
  public regVals = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }
  public adminModalVars = {
    active: false,
    toggle: '',
    header: '',
    progress: {},
    brief: {},
  }

  constructor(private httpWorker: HttpWorkerService) {}

  ngOnInit(): void {
    this.getToken()
  }

  public postLogin() {
    this.httpWorker.postLogin(this.logVals)
    .subscribe((res: any) => {
      this.httpWorker.setLocal(res.headers.get('authorization'))
      setTimeout(() => this.getToken(), 0)
    })
  }

  public postRegistration() {
    this.httpWorker.postRegistration(this.regVals)
    .subscribe(() => this.toggle = false)
  }

  public getToken() {
    this.adminActive = this.httpWorker.getLocal() != null;
  }

  public getAllFeedback() {
    this.httpWorker.getFeedback()
    .subscribe((res: any) => this.feedback = res)
  }

  public getAllBriefs() {
    this.httpWorker.getActiveBriefs()
    .subscribe((res: any) => this.briefs = res)
  }

  public removeBrief(id: number) {
    this.httpWorker.removeBrief(id)
    .subscribe((res: any) => {
      this.briefs = this.briefs.filter((item: any) => item.id !== res)
    })
  }

  public getProgress() {
    this.httpWorker.getProgress()
    .subscribe((res: any) => this.progress = res)
  }

  public details(item: any, toggle: string, header: string) {
    this.adminModalVars.active = true
    this.adminModalVars.toggle = toggle
    this.adminModalVars.header = header
    this.adminModalVars.brief = item

    document.body.style.overflow = 'hidden'
  } 

  public closeAdminModal() {
    this.adminModalVars.active = false

    document.body.style.overflow = 'auto'
  }

  public check(item: any) {
    item.active = !item.active;
  }




}
