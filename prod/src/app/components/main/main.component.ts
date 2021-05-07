import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { leftRight, 
  line, 
  rightLeft } from 'src/app/animations/opacity';
import { AppComponent } from 'src/app/app.component';
import { HttpWorkerService } from 'src/app/services/http-worker.service';

@Component({
  selector: 'netch-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [leftRight, rightLeft, line]
})
export class MainComponent implements OnInit, OnDestroy {

  public checkInput = false
  public animateActiveSection = false
  public animateActiveSectionsAll = false
  public feedbackData = {
    name: '',
    phone: '',
    email: '',
  }


  constructor(
    private title: Title,
    private httpWorker: HttpWorkerService,
    private app: AppComponent
  ) {
    this.title.setTitle('Netch')
  }

  ngOnDestroy(): void {
    window.onscroll = () => {return false}
  }

  ngOnInit(): void {
    setTimeout(() => this.animateActiveSection = true, 500);
    window.onscroll = () => {this.animateActiveSectionsAll = true}
  }

  public postFeedback() {
    this.httpWorker.postFeedback(this.feedbackData)
    .subscribe(() => {this.app.openModal('Уведомление', 
    'Спасибо за заказ обратной связи свяжуться в ближайшее время (*^_^*)')}, 
    () => {return false}, 
    () => {
      this.feedbackData.name = ''
      this.feedbackData.phone = ''
      this.feedbackData.email = ''
    })
  }


}
