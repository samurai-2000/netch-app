import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const modal = trigger('Modal',[
  state('start', style({
    transform: 'none',
    opacity: 1,
  })),
  state('stop', style({
    transform: 'translateY(-150%)',
    opacity: 0,
  })),
  transition('start <=> stop', [
    animate('0.4s ease-in'),
  ]),

])
