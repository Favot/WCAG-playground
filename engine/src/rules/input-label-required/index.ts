import { isTextInput } from '../../helpers';
import type { Rule } from '../../types';

const rule: Rule = {
  id: 'input-label-required',
  matcher: (node) => isTextInput(node),
  assertion: (node) => {
    const label = node.props.accessibilityLabel;
    return typeof label === 'string' && label.trim().length > 0;
  },
  help: {
    problem: 'This input control has no accessible name.',
    solution: "Set a non-empty 'accessibilityLabel' on the input.",
    link: '',
  },
};

export default rule;
