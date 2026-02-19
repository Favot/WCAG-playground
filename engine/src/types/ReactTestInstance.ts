import type { ElementType } from 'react';

export interface ReactTestInstance {
  instance: unknown;
  /**
   * Component or host element type for the rendered node.
   * Matches the shape returned by @testing-library/react-native.
   */
  type: ElementType<any>;
  /**
   * Props bag for the rendered node. Kept intentionally permissive for matcher/rule checks.
   */
  props: Record<string, any>;
  parent: ReactTestInstance | null;
  children: Array<ReactTestInstance | string>;
  find: (predicate: (node: ReactTestInstance) => boolean) => ReactTestInstance;
  findByType: (type: ElementType<any>) => ReactTestInstance;
  findByProps: (props: Record<string, any>) => ReactTestInstance;
  findAll: (
    predicate: (node: ReactTestInstance) => boolean,
    options?: { deep: boolean }
  ) => ReactTestInstance[];
  findAllByType: (type: ElementType<any>, options?: { deep: boolean }) => ReactTestInstance[];
  findAllByProps: (
    props: Record<string, any>,
    options?: { deep: boolean }
  ) => ReactTestInstance[];
}
