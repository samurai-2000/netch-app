import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lineH, lineW } from 'src/app/animations/line';
import { bottomTop, leftRight, opacity, rightLeft } from 'src/app/animations/opacity';
import { HttpWorkerService } from 'src/app/services/http-worker.service';

@Component({
  selector: 'netch-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [leftRight, rightLeft, bottomTop, opacity , lineW, lineH]
})
export class MainComponent implements OnInit {

  public feedbackVals = {
    name: '',
    email: '',
    phone: '',
  }
  public triggerS1 = false
  public triggerS2 = false
  public triggerS3 = false
  public triggerS4 = false
  public triggerS5 = false
  public s2: any
  public s3: any
  public s4: any
  public s5: any

  constructor(
    private httpWorker: HttpWorkerService,
    private router: Router
  ) { 
    this.startAnimate()
  }

  ngOnInit(): void {
    
  }

  public postFeedback() {
    this.httpWorker.postFeedback(this.feedbackVals)
    .subscribe(() => {})
  }

  public startAnimate() {

    this.router.events.subscribe((e: any) => {
      if (e.url == '/') {
        setTimeout(() => this.triggerS1 = true, 300);
        window.addEventListener('scroll', () => {this.scrollAnimate()} )
      } else {
        window.removeEventListener('scroll', () => {this.scrollAnimate})
      }
    })

  }

  public scrollAnimate() {
    this.s2 = document.querySelector('.s2')?.getBoundingClientRect()
    this.s3 = document.querySelector('.s3')?.getBoundingClientRect()
    this.s4 = document.querySelector('.s4')?.getBoundingClientRect()
    this.s5 = document.querySelector('.s5')?.getBoundingClientRect()
    
    if (this.s2.y <= 300)
    this.triggerS2 = true 
    if (this.s3.y <= 300)
    this.triggerS3 = true
    if (this.s4.y <= 300)
    this.triggerS4 = true
    if (this.s5.y <= 300)
    this.triggerS5 = true
  }

}
