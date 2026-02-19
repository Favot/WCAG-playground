import type { ElementType } from 'react';

/**
 * React Native host component names that may appear as node.type when it's a string.
 * React's ElementType string union only includes DOM intrinsics; RN uses different names.
 */
export type ReactNativeHostType =
  | 'TextInput'
  | 'View'
  | 'Text'
  | 'Image'
  | 'ScrollView'
  | 'Switch'
  | 'Slider';

/** Type of node.type: React's ElementType plus RN host component names. */
export type ReactTestInstanceNodeType = ElementType<any> | ReactNativeHostType;

export interface ReactTestInstance {
  instance: unknown;
  /**
   * Component or host element type for the rendered node.
   * Matches the shape returned by @testing-library/react-native.
   */
  type: ReactTestInstanceNodeType;
  /**
   * Props bag for the rendered node. Kept intentionally permissive for matcher/rule checks.
   */
  props: Record<string, any>;
  parent: ReactTestInstance | null;
  children: Array<ReactTestInstance | string>;
  find: (predicate: (node: ReactTestInstance) => boolean) => ReactTestInstance;
  findByType: (type: ReactTestInstanceNodeType) => ReactTestInstance;
  findByProps: (props: Record<string, any>) => ReactTestInstance;
  findAll: (
    predicate: (node: ReactTestInstance) => boolean,
    options?: { deep: boolean }
  ) => ReactTestInstance[];
  findAllByType: (
    type: ReactTestInstanceNodeType,
    options?: { deep: boolean }
  ) => ReactTestInstance[];
  findAllByProps: (props: Record<string, any>, options?: { deep: boolean }) => ReactTestInstance[];
}
