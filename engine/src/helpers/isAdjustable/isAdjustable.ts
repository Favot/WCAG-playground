import type { ReactTestInstance } from '../../types/ReactTestInstance';

const isAdjustable = (node: ReactTestInstance) => {
  const isSliderLike = (instance: ReactTestInstance) =>
    instance.props?.minimumValue !== undefined &&
    instance.props?.maximumValue !== undefined;

  const slidersInTree = node.findAll((_node: ReactTestInstance) => isSliderLike(_node));

  // If this node is slider-like BUT more than one slider-like component
  // is found in the tree that has this node as root,
  // it means that this node must be a wrapper for the actual slider and should be discarded.
  return isSliderLike(node) && slidersInTree.length === 1;
};

export default isAdjustable;
