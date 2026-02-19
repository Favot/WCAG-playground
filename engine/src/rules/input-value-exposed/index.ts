import { isTextInput } from '../../helpers';
import type { Rule } from '../../types';

const rule: Rule = {
  id: 'input-value-exposed',
  matcher: (node) => isTextInput(node),
  assertion: (node) => {
    const hasValue = node.props.value !== undefined;
    const isSecure = node.props.secureTextEntry === true;

    if (hasValue && !isSecure) {
      return typeof node.props.accessibilityValue?.text === 'string';
    }

    return true;
  },
  help: {
    problem: 'This input has a value but does not expose it to assistive technology.',
    solution: "Set 'accessibilityValue' to { text: value } when 'value' is provided.",
    link: '',
  },
};

export default rule;
