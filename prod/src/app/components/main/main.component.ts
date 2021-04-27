import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { leftRight, 
  line, 
  rightLeft } from 'src/app/animations/opacity';

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


  constructor(private title: Title) {
    this.title.setTitle('Netch')
  }

  ngOnDestroy(): void {
    window.onscroll = () => {return false}
  }

  ngOnInit(): void {
    window.onscroll = () => {this.animateActiveSectionsAll = true}
    setTimeout(() => this.animateActiveSection = true, 500);
  }


}
