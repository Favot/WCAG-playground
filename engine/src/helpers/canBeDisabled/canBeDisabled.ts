import { ReactTestInstance } from '../../types/ReactTestInstance';

const canBeDisabled = (node: ReactTestInstance) => {
  const hasDisableProp = node.props.disabled !== undefined || node.props.enabled !== undefined;

  if (!hasDisableProp) {
    return false;
  }

  // Some components (e.g., Slider) render multiple internal nodes that also carry
  // the disabled/enabled flag. In that case `inTree.length` will be > 1, but the
  // root component is still the one we want to validate.
  if (
    hasDisableProp &&
    (
      (typeof node.type === 'function' && node.type.name?.includes('Slider')) ||
      node.props.minimumValue !== undefined ||
      node.props.maximumValue !== undefined
    )
  ) {
    return true;
  }

  const inTree = node.findAll(
    (_node: ReactTestInstance) =>
      _node.props.disabled !== undefined || _node.props.enabled !== undefined
  );

  // If this node can be disabled BUT more than one disable-able component
  // is found in the tree that has this node as root,
  // it means that this node must be a Wrapper for the
  // actual disable-able component and should therefore be discarded.

  return hasDisableProp && inTree.length === 1;
};

export default canBeDisabled;
