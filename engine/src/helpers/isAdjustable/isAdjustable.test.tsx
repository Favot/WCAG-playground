// @ts-nocheck
import React from 'react';
import { render as renderNative } from '@testing-library/react-native';
import type { ReactTestInstance } from 'src/types/ReactTestInstance';
import CommunitySlider from '@react-native-community/slider';
import isAdjustable from './isAdjustable';

const CustomSlider = () => (
  <CommunitySlider minimumValue={1} maximumValue={100} />
);

const cases = [
  ['community Slider', CommunitySlider, 1],
  ['any slider component in a wrapper', CustomSlider, 1],
];

test.each(cases)(`identifies %p`, (_, Component, numOfMatches) => {
  const { UNSAFE_root } = renderNative(
    <Component maximumValue={10} minimumValue={1} />
  );

  const matcher = (node: ReactTestInstance) => isAdjustable(node);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBe(numOfMatches);
});
