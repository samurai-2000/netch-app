import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
    })
  }

}
