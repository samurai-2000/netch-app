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
    this.app.openModal('Вебпак',
    `Вебпаки - это рекомендованные нашими разработчиками наборы технологий, которые позволят оптимально использовать все необходимые ресурсы под конкретную задачу. Ниже представлены наши собственные наработки и их сопоставимость с видами веб-приложений, чтобы в итоге получить выгодные проекты высокого качества в удобные для вас сроки. `)
  }

}
