import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const navMenu = trigger('NavMenu',[
  state('slide', style({
    transform: 'none',
    opacity: 1,
  })),
  state('close', style({
    transform: 'translateX(-150%)',
    opacity: 0,
  })),
  transition('close <=> slide', [
    animate('0.2s ease-in')
  ]),

])