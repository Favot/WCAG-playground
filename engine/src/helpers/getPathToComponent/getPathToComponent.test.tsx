import { render as renderNative } from '@testing-library/react-native';
import React, { PropsWithChildren } from 'react';
import { Pressable, Text, View, ViewProps } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import getPathToComponent from './getPathToComponent';

it('should handle a View node with no parents', () => {
  const { UNSAFE_root } = renderNative(<View testID={'test'} />);
  const node = UNSAFE_root.findByProps({ testID: 'test' });

  expect(getPathToComponent(node)).toEqual(['View']);
});

it('should handle a Text node with no parents', () => {
  const { UNSAFE_root } = renderNative(<Text testID={'test'} />);
  const node = UNSAFE_root.findByProps({ testID: 'test' });

  expect(getPathToComponent(node)).toEqual(['Text']);
});

it('should handle a custom node with no parents', () => {
  const Tree = () => null;

  //@ts-expect-error
  const { UNSAFE_root } = renderNative(<Tree testID={'test'} />);
  const node = UNSAFE_root.findByProps({ testID: 'test' });

  expect(getPathToComponent(node)).toEqual(['Tree']);
});

it('should handle a custom node with parents', () => {
  const Custom = (props: PropsWithChildren<ViewProps>) => <View {...props} />;

  const { UNSAFE_root } = renderNative(
    <SafeAreaView>
      <Pressable>
        <Custom>
          <Text testID={'test'} />
        </Custom>
      </Pressable>
    </SafeAreaView>
  );

  const node = UNSAFE_root.findByProps({ testID: 'test' });

  expect(getPathToComponent(node)).toEqual([
    'RCTSafeAreaView',
    'Pressable',
    'View', // Most touchables have an internal 'View'
    'Custom',
    'View',
    'Text',
  ]);
});

it('should handle a View node with a custom parent', () => {
  const Tree = () => <View testID={'test'} />;

  const { UNSAFE_root } = renderNative(<Tree />);
  const node = UNSAFE_root.findByProps({ testID: 'test' });

  expect(getPathToComponent(node)).toEqual(['Tree', 'View']);
});

it('should handle a View within a View', () => {
  const { UNSAFE_root } = renderNative(
    <View>
      <View testID={'test'} />
    </View>
  );

  const node = UNSAFE_root.findByProps({ testID: 'test' });
  expect(getPathToComponent(node)).toEqual(['View', 'View']);
});

it('should disconsider fragments in component path', () => {
  const Tree = () => {
    return (
      <View>
        <>
          <Text testID={'test'}>Test</Text>
        </>
      </View>
    );
  };

  const { UNSAFE_root } = renderNative(<Tree />);
  const node = UNSAFE_root.findByProps({ testID: 'test' });
  expect(getPathToComponent(node)).toEqual(['Tree', 'View', 'Text']);
});
