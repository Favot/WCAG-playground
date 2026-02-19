import type { ReactTestInstance } from "../../types/ReactTestInstance";
import isPressable from "../isPressable";

const isCheckbox = (node: ReactTestInstance) => {
  return (
    node.props.accessibilityRole === "checkbox" &&
    (isPressable(node.type) || typeof node.type === "string")
  );

  // TODO:
  // type === community checkbox?
};

export default isCheckbox;
