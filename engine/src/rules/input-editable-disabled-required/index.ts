import { isTextInput } from "../../helpers";
import type { Rule } from "../../types";

const rule: Rule = {
  id: "input-editable-disabled-required",
  matcher: (node) => isTextInput(node),
  assertion: (node) => {
    if (node.props.editable === false) {
      return node.props.accessibilityState?.disabled === true;
    }

    return true;
  },
  help: {
    problem: "This input is not editable but does not expose a disabled state.",
    solution: "Set 'accessibilityState' to { disabled: true } when editable is false.",
    link: "",
  },
};

export default rule;
