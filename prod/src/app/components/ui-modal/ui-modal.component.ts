import { Component, Input, OnInit } from '@angular/core';
import { modal } from 'src/app/animations/modal';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss'],
  animations: [modal],
})
export class UiModalComponent implements OnInit {

  @Input() public active = false
  @Input() public headerContent!: string
  @Input() public bodyContent!: string


  constructor(private app: AppComponent) {  
  }

  ngOnInit(): void {
  }
  
  public closeModal() {
    this.app.closeModal()
  }

  public outModalClick(e: any) {
    e.target === document.querySelector('.modal-wrapper') ?
    this.app.closeModal() : e.stopPropagation()
  }

}
