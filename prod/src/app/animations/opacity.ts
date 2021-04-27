import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const leftRight = trigger('leftRight',[
  state('transparency', style({
    transform: 'translateX(-10%)',
    opacity: 0,
  })),
  state('opacity', style({
    transform: 'translateX(0)',
    opacity: 1,
  })),
  transition('transparency <=> opacity', [
    animate('0.5s ease-in'),
  ]),

])

export const rightLeft = trigger('rightLeft',[
  state('transparency', style({
    transform: 'translateX(10%)',
    opacity: 0,
  })),
  state('opacity', style({
    transform: 'translateX(0)',
    opacity: 1,
  })),
  transition('transparency <=> opacity', [
    animate('0.5s ease-in'),
  ]),

])

export const bottomTop = trigger('bottomTop',[
  state('transparency', style({
    transform: 'translateY(10%)',
    opacity: 0,
  })),
  state('opacity', style({
    transform: 'translateX(0)',
    opacity: 1,
  })),
  transition('transparency <=> opacity', [
    animate('0.3s ease-in'),
  ]),

])

export const opacity = trigger('opacity',[
  state('transparency', style({
    opacity: 0,
  })),
  state('opacity', style({
    opacity: 1,
  })),
  transition('transparency <=> opacity', [
    animate('0.5s ease-in'),
  ]),

])

export const line = trigger('Line',[
  state('point', style({
    height: '0px',
  })),
  state('line', style({
    height: '*',
  })),
  transition('point <=> line', [
    animate('0.3s ease-in'),
  ]),

])