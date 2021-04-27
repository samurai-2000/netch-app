import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { 
  businessText, 
  lendingText, 
  officialText, 
  portfolioText, 
  shopText, 
  webpackText } from 'src/app/data/text';

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
    window.scrollTo(0,0)
  }

  public openModal(header: string) {

    if (header === 'Вебпак')
    return this.app.openModal(header, webpackText)
    if (header === 'Лендинг')
    return this.app.openModal(header, lendingText)
    if (header === 'Сайт-визитка')
    return this.app.openModal(header, businessText)
    if (header === 'Сайт-портфолио')
    return this.app.openModal(header, portfolioText)
    if (header === 'Интернет-магазин')
    return this.app.openModal(header, shopText)
    if (header === 'Официальный сайт')
    return this.app.openModal(header, officialText)

  }

}
