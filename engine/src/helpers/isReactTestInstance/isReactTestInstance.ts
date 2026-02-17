import { render as renderNative } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import type { ReactTestInstance } from 'src/types/ReactTestInstance';

let testInstancePrototype: object | null = null;

const ensureTestInstancePrototype = () => {
  if (testInstancePrototype) {
    return;
  }

  const { UNSAFE_root, unmount } = renderNative(React.createElement(View));
  testInstancePrototype = Object.getPrototypeOf(UNSAFE_root);
  unmount();
};

export default function isReactTestInstance(candiate: unknown): candiate is ReactTestInstance {
  ensureTestInstancePrototype();
  return (
    !!candiate &&
    typeof candiate === 'object' &&
    Object.getPrototypeOf(candiate) === testInstancePrototype
  );
}
