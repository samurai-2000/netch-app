import { Component, OnInit } from '@angular/core';
import { BriefService } from 'src/app/services/brief.service';

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

  constructor(private brief: BriefService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

  public postBrief() {
    this.brief.postBrief(this.briefVals).subscribe((res: any) => console.log(res))
  }

}
