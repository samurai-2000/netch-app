import { Component, OnInit } from '@angular/core';
import { navMenu } from 'src/app/animations/navMenu';

@Component({
  selector: 'ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss'],
  animations: [navMenu]
})
export class UiHeaderComponent implements OnInit {

  public slideNavMenu = false


  constructor() { }

  ngOnInit(): void {
  }

  public toggleNavMenu() {
    if (this.slideNavMenu == false) {
      this.slideNavMenu = true
      document.body.style.overflow = 'hidden'
    } else {
      this.slideNavMenu = false
      document.body.style.overflow = 'auto'
    }
  }

}
