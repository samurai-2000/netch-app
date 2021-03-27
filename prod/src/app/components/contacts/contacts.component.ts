import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'netch-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: []
})
export class ContactsComponent implements OnInit{

  constructor(private app: AppComponent) {

  }

  ngOnInit(): void {
  }

  openModal() {
    this.app.openModal('Модальное окно','Много текста')
  }
}
