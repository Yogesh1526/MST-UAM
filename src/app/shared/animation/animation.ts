import {
    trigger,
    state,
    style,
    transition,
    animate,
    animateChild,
    query,
  } from '@angular/animations';
  
  export const onSideNavChange = trigger('onSideNavChange', [
    state(
      'close',
      style({
        'min-width': '55px',
      })
    ),
    state(
      'open',
      style({
        'min-width': '290px',
        'margin-left': '-12px',
      })
    ),
    transition('close => open', animate('250ms ease-in')),
    transition('open => close', animate('250ms ease-in')),
  ]);
  
  export const onMainContentChange = trigger('onMainContentChange', [
    state(
      'close',
      style({
        'margin-left': '82px',
        'margin-right': '20px',
        'padding-left': '20px',
      })
    ),
    state(
      'open',
      style({
        'margin-left': '290px',
        'margin-right': '20px',
        'padding-left': '20px',
      })
    ),
    transition('close => open', animate('250ms ease-in')),
    transition('open => close', animate('250ms ease-in')),
  ]);
  
  export const animateText = trigger('animateText', [
    state(
      'hide',
      style({
        display: 'none',
        opacity: 0,
      })
    ),
    state(
      'show',
      style({
        display: 'block',
        opacity: 1,
      })
    ),
    transition('close => open', animate('350ms ease-in')),
    transition('open => close', animate('200ms ease-out')),
  ]);
  