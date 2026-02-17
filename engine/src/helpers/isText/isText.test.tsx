import { render as renderNative } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { ReactTestInstance } from '../../types/ReactTestInstance';
import isText from './isText';

it('should identify an empty text node', () => {
  const { UNSAFE_root } = renderNative(<Text />);

  const matcher = (node: ReactTestInstance) => isText(node.type);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify a non-empty text node', () => {
  const { UNSAFE_root } = renderNative(<Text>I am not empty!</Text>);

  const matcher = (node: ReactTestInstance) => isText(node.type);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify a text node wrapped in a view', () => {
  const { UNSAFE_root } = renderNative(
    <View>
      <Text>I am not empty!</Text>
    </View>
  );

  const matcher = (node: ReactTestInstance) => isText(node.type);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify a text node wrapped in another text node', () => {
  const { UNSAFE_root } = renderNative(
    <Text>
      <Text>I am not empty!</Text>
    </Text>
  );

  const matcher = (node: ReactTestInstance) => isText(node.type);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBe(2);
});

it('should identify multiple text nodes', () => {
  const { UNSAFE_root } = renderNative(
    <View>
      <Text>Node 1</Text>
      <Text>Node 2</Text>
    </View>
  );

  const matcher = (node: ReactTestInstance) => isText(node.type);
  const matched = UNSAFE_root.findAll(matcher);

  expect(matched.length).toBe(2);
});
