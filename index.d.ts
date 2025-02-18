declare module 'react-native-color-picker' {
  import * as React from 'react';

  type HsvColor = { h: number; s: number; v: number };

  export interface IPicker {
    color: string | HsvColor;
    defaultColor: string | HsvColor;
    oldColor?: string;
    style?: object;
    onColorSelected: (selectedColor: HsvColor) => void;
    onColorChange: (selectedColor: HsvColor) => void;
    onOldColorSelected?: (oldColor: HsvColor) => void;
    hideSliders?: boolean;
  }

  export const ColorPicker: React.ComponentType<IPicker>;
  export const TriangleColorPicker: React.ComponentType<IPicker>;
  export const toHsv: (color: string) => HsvColor;
  export const fromHsv: (hsv: HsvColor) => string;
}
