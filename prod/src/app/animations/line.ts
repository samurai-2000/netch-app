import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const lineW = trigger('lineW',[
  state('wait', style({
    width: '0',
  })),
  state('run', style({
    width: '*',
  })),
  transition('wait <=> run', [
    animate('0.5s ease-in')
  ])

])

export const lineH = trigger('lineH',[
    state('wait', style({
        height: '0',
    })),
    state('run', style({
        height: '*',
    })),
    transition('wait <=> run', [
      animate('0.5s ease-in')
    ])
  
  ])