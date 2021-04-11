import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingService } from 'src/app/services/tracking.service';

@Component({
  selector: 'tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  public trackData: any
  public trackActive = false
  public trackInvalid = false

  constructor(
    private track: TrackingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkTrack()
    window.scrollTo(0, 0)
  }

  public getUserTrack(track = this.track.getLocalTrack()) {
    this.track.getTrack(Number(track))
    .subscribe((res: any) => {
      this.trackData = res
      this.trackActive = true
    }, () => this.trackInvalid = true)
  }

  public checkTrack() {
    if (Number(this.track.getLocalTrack()) !== 0 && 
    Number(this.track.getLocalTrack()) !== NaN) {
      this.getUserTrack()
      this.trackActive = true
    } else {
      this.trackActive = false
    }
  }

  public dischargeTrack() {
    localStorage.removeItem('TRACK')
    this.trackActive = false
  }

}
