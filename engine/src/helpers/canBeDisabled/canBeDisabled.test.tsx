import React from 'react';
import { render as renderNative } from '@testing-library/react-native';
import type { ReactTestInstance } from 'src/types/ReactTestInstance';
import { TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import canBeDisabled from './canBeDisabled';

it('should identify buttons', () => {
  const Button = () => <TouchableOpacity disabled={true} />;

  const { UNSAFE_root } = renderNative(<Button />);

  const matcher = (node: ReactTestInstance) => canBeDisabled(node);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify sliders', () => {
  const SliderWrapper = () => <Slider disabled={true} />;

  const { UNSAFE_root } = renderNative(<SliderWrapper />);

  const matcher = (node: ReactTestInstance) => canBeDisabled(node);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBe(1);
});
