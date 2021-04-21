import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'netch-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
  private title: Title,
  private app: AppComponent
  ) { 
    this.title.setTitle('Услуги')
  }

  ngOnInit(): void {
  }

  public openModal() {
    this.app.openModal('ВЕБПАК ЕБАТЬ ЭТО ЧТО ТАКОЕ НАХУЙ?!',
    'КЛАССНАЯ ТЕМА ВАЩЕ РЕКОМЕНДУЮ!')
  }

}
