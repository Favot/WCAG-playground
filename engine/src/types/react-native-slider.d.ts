import type { ComponentType } from 'react';
import type { AccessibilityState, ViewProps } from 'react-native';

export interface SliderProps extends ViewProps {
  accessibilityRole?: string;
  accessibilityState?: AccessibilityState;
  accessibilityValue?: {
    min?: number;
    max?: number;
    now?: number;
  };
  disabled?: boolean;
  maximumValue?: number;
  minimumValue?: number;
}

declare const Slider: ComponentType<SliderProps>;
export default Slider;
