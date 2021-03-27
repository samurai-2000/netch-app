import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const navMenu = trigger('NavMenu',[
  state('slide', style({
    transform: 'none'
  })),
  state('close', style({
    transform: 'translateX(-150%)'
  })),
  transition('close <=> slide', [
    animate('0.2s ease-in-out')
  ]),

])