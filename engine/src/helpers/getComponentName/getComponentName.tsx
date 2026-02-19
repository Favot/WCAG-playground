// @ts-nocheck
import type { ReactTestInstance } from '../../types/ReactTestInstance';

const blacklist = ['String', 'Component', 'Object'];

const extractNameFromType = (component: ReactTestInstance): string | undefined => {
  const { displayName, name } = component.type;

  if (displayName && !blacklist.includes(displayName)) {
    return displayName;
  }

  if (name && !blacklist.includes(name)) {
    return name;
  }
};

const getComponentName = (component: ReactTestInstance): string => {
  let name: string | undefined;
  name = extractNameFromType(component);

  const children = Array.isArray(component.children) ? component.children : [];
  if (!name && children.length > 0 && typeof children[0] !== 'string') {
    // Some components are wrapped in Animated or Virtualized nodes,
    // and the main component is the child, not the wrapper,
    // so we inspect the child component for name, not the parent.

    name = extractNameFromType(component.children[0]);
  }

  return name || 'Unknown';
};

export default getComponentName;
