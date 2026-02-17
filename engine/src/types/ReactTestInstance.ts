export interface ReactTestInstance {
  instance: unknown;
  type: unknown;
  props: Record<string, unknown>;
  parent: ReactTestInstance | null;
  children: Array<ReactTestInstance | string>;
  find: (predicate: (node: ReactTestInstance) => boolean) => ReactTestInstance;
  findByType: (type: unknown) => ReactTestInstance;
  findByProps: (props: Record<string, unknown>) => ReactTestInstance;
  findAll: (
    predicate: (node: ReactTestInstance) => boolean,
    options?: { deep: boolean }
  ) => ReactTestInstance[];
  findAllByType: (type: unknown, options?: { deep: boolean }) => ReactTestInstance[];
  findAllByProps: (
    props: Record<string, unknown>,
    options?: { deep: boolean }
  ) => ReactTestInstance[];
}
