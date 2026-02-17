import type { ReactTestInstance } from 'src/types/ReactTestInstance';
import isPressable from '../isPressable';

const isCheckbox = (node: ReactTestInstance) => {
  return isPressable(node.type) && node.props.accessibilityRole === 'checkbox';

  // TODO:
  // type === community checkbox?
};

export default isCheckbox;
