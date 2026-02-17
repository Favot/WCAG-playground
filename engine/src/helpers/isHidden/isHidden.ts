import type { ReactTestInstance } from 'src/types/ReactTestInstance';

const isHidden = (node: ReactTestInstance) => {
  return (
    node.props.accessibilityElementsHidden ||
    node.props.importantForAccessibility === 'no-hide-descendants'
  );
};

export default isHidden;
