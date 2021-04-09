import { Component, OnInit } from '@angular/core';
import { HttpWorkerService } from 'src/app/services/http-worker.service';

@Component({
  selector: 'netch-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public feedbackVals = {
    name: '',
    email: '',
    phone: '',
  }

  constructor(private httpWorker: HttpWorkerService) { }

  ngOnInit(): void {
  }

  postFeedback() {
    this.httpWorker.postFeedback(this.feedbackVals)
    .subscribe((res: any) => console.log(res))
  }

}
