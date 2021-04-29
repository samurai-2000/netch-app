import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { BriefService } from 'src/app/services/brief.service';
import { TrackingService } from 'src/app/services/tracking.service';

@Component({
  selector: 'brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss']
})

export class BriefComponent implements OnInit {

  public briefVals = {
    name: '',
    email: '',
    phone: '',
    goals: '',
    requirements: '',
    results: '',
    limitations: '',
    assumptions: '',
    kindOfActivity: '',
    design: '',
    site: '',
    products: '',
    services: '',
    logo: '',
    content: '',
    sections: '',
  }
  public checkInput = false

  constructor(
    private brief: BriefService,
    private track: TrackingService,
    private router: Router,
    private title: Title,
    private app: AppComponent,
  ) {
    this.title.setTitle('Бриф')
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

  public postBrief() {
    this.brief.postBrief(this.briefVals)
    .subscribe((res: any) => {
      this.track.setLocalTrack(res)
      this.router.navigate(['/tracking'])
    },
    () => false,
    () => setTimeout(() => 
    { this.app.openModal('Уведомление',
    `Спасибо за то, что заполнили бриф, в данный момент вам на почтуотправлено письмо 
    с номером вашего заказа, так же вы можете в любой момент отследить процесс разработки вашего проекта`)}, 1000))
  }

}
