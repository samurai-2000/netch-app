import { Component } from '@angular/core';


@Component({
  selector: 'netch-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activeModal = false
  public toggleWrapper = false
  public headerContent!: string
  public bodyContent!: string

  constructor() {

  }

  public openModal(headerContent = '', bodyContent = '') {
    this.headerContent = headerContent
    this.bodyContent = bodyContent
    this.toggleWrapper = true
    setTimeout(() => this.activeModal = true, 0);

    document.body.style.overflow = 'hidden'
  }

  public closeModal() {
    this.activeModal = false
    this.toggleWrapper = false

    document.body.style.overflow = 'auto'
  }

}
