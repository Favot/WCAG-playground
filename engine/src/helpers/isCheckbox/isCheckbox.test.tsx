import { render as renderNative } from '@testing-library/react-native';
import React from 'react';
import {
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ReactTestInstance } from '../../types/ReactTestInstance';
import isCheckbox from './isCheckbox';

const pressableTestCases: Array<[string, React.ComponentType<any>]> = [
  ['TouchableOpacity', TouchableOpacity],
  ['TouchableHighlight', TouchableHighlight],
  ['TouchableWithoutFeedback', TouchableWithoutFeedback],
  ['Pressable', Pressable],
];

test.each(pressableTestCases)(`should identify a %p with a checkbox role`, (_, Component) => {
  const { UNSAFE_root } = renderNative(
    <Component accessibilityRole="checkbox">
      <Text>Checkbox</Text>
    </Component>
  );

  const matcher = (node: ReactTestInstance) => isCheckbox(node);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBeGreaterThanOrEqual(1);
});

test.each(pressableTestCases)(
  `should not identify a %p without a checkbox role`,
  (_, Component) => {
    const { UNSAFE_root } = renderNative(
      <Component>
        <Text>Checkbox</Text>
      </Component>
    );

    const matcher = (node: ReactTestInstance) => isCheckbox(node);
    const matched = UNSAFE_root.findAll(matcher);

    expect(matched.length).toBe(0);
  }
);

it('should not identiy a non-pressable/touchable component, even if it has a checkbox role', () => {
  const { UNSAFE_root } = renderNative(
    <View accessibilityRole="checkbox">
      <Text>Something</Text>
    </View>
  );

  const matcher = (node: ReactTestInstance) => isCheckbox(node);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBeGreaterThanOrEqual(1);
});
