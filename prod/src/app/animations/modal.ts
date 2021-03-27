import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const modal = trigger('Modal',[
  state('start', style({
    transform: 'none'
  })),
  state('stop', style({
    transform: 'translateY(-150%)'
  })),
  transition('start <=> stop', [
    animate('0.2s ease-in-out')
  ]),

])
