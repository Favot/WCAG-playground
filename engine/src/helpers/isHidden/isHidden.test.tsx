import React from 'react';
import { render as renderNative } from '@testing-library/react-native';
import { View } from 'react-native';
import type { ReactTestInstance } from 'src/types/ReactTestInstance';
import isHidden from './isHidden';

it('should identify a node with accessibilityElementsHidden prop', () => {
  const { UNSAFE_root } = renderNative(<View accessibilityElementsHidden />);

  const matcher = (node: ReactTestInstance) => isHidden(node);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBeTruthy();
});

it('should identify a node with importantForAccessibility prop set to "no-hide-descendants"', () => {
  const { UNSAFE_root } = renderNative(
    <View importantForAccessibility="no-hide-descendants" />
  );

  const matcher = (node: ReactTestInstance) => isHidden(node);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBeTruthy();
});

it('should not identify a node with importantForAccessibility prop set to val other than "no-hide-descendants"', () => {
  const { UNSAFE_root } = renderNative(
    <View importantForAccessibility="yes" />
  );

  const matcher = (node: ReactTestInstance) => isHidden(node);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBeFalsy();
});

it('should not identify a node without accessibilityElementsHidden or importantForAccessibility props', () => {
  const { UNSAFE_root } = renderNative(<View />);

  const matcher = (node: ReactTestInstance) => isHidden(node);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBeFalsy();
});
