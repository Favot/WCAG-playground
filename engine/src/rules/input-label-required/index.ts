import { TextInput } from 'react-native';
import { getComponentName } from '../../helpers';
import type { Rule } from '../../types';

const rule: Rule = {
  id: 'input-label-required',
  matcher: (node) => {
    const name = getComponentName(node);
    const typeName = typeof node.type === 'string' ? node.type : '';
    const isHostTextInput = typeName === 'TextInput';
    const isTextInput = node.type === TextInput || isHostTextInput || name === 'TextInput';

    return isTextInput;
  },
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
