import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'netch-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit{

  public completeCopy = false

  constructor(
    private title: Title
  ) {
    this.title.setTitle('Контакты')
  }

  ngOnInit(): void {

  }

  public copy(value: string) {
    navigator.clipboard.writeText(value)
    .then(() => this.completeCopy = true)
    .then(() => setTimeout(() => this.completeCopy = false, 1000))
  }

}
