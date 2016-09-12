'use strict';

import React from 'react-native';
import Toast from 'react-native-root-toast';

export function ToastShort (content, gravity) {
  let position;
  switch (gravity) {
    case 'bottom':
      position = Toast.positions.BOTTOM;
      break;
    case 'center':
      position = Toast.positions.CENTER;
      break;
    case 'top':
      position = Toast.positions.TOP;
      break;
    default:
      position = Toast.positions.BOTTOM;
      break;
  }
  Toast.show(content, {
      duration: Toast.durations.Short,
      position: position,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
          // calls on toast\`s appear animation start
      },
      onShown: () => {
          // calls on toast\`s appear animation end.
      },
      onHide: () => {
          // calls on toast\`s hide animation start.
      },
      onHidden: () => {
          // calls on toast\`s hide animation end.
      }
  });
}

export function ToastLong (content,gravity) {
  let position;
  switch (gravity) {
    case 'bottom':
      position = Toast.positions.BOTTOM;
      break;
    case 'center':
      position = Toast.positions.CENTER;
      break;
    case 'top':
      position = Toast.positions.TOP;
      break;
    default:
      position = Toast.positions.BOTTOM;
      break;
  }
  Toast.show(content, {
      duration: Toast.durations.LONG,
      position: position,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
          // calls on toast\`s appear animation start
      },
      onShown: () => {
          // calls on toast\`s appear animation end.
      },
      onHide: () => {
          // calls on toast\`s hide animation start.
      },
      onHidden: () => {
          // calls on toast\`s hide animation end.
      }
  });
}
