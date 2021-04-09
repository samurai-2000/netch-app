import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/services/tracking.service';

@Component({
  selector: 'tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  public trackData: any

  constructor(private track: TrackingService) { }

  ngOnInit(): void {
    this.getUserTrack(22)
  }

  public getUserTrack(id: number) {
    this.track.getTrack(id)
    .subscribe((res: any) => this.trackData = res)
  }

}
