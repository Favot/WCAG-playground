import React from 'react';
import { render as renderNative } from '@testing-library/react-native';
import {
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import type { ReactTestInstance } from 'src/types/ReactTestInstance';
import isCheckbox from './isCheckbox';

const pressableTestCases: Array<[string, React.ComponentType<any>]> = [
  ['TouchableOpacity', TouchableOpacity],
  ['TouchableHighlight', TouchableHighlight],
  ['TouchableWithoutFeedback', TouchableWithoutFeedback],
  ['Pressable', Pressable],
];

test.each(pressableTestCases)(
  `should identify a %p with a checkbox role`,
  (_, Component) => {
    const { UNSAFE_root } = renderNative(
      <Component accessibilityRole="checkbox">
        <Text>Checkbox</Text>
      </Component>
    );

    const matcher = (node: ReactTestInstance) => isCheckbox(node);
    const matched = UNSAFE_root.findAll(matcher);
    // console.log(UNSAFE_root.findAll((node) => node.props.accessibilityRole === 'checkbox').map((node) => node.type));

    expect(matched.length).toBe(1);
  }
);

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

  expect(matched.length).toBe(0);
});
