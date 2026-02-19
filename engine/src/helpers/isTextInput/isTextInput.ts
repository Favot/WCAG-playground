import { TextInput } from "react-native";
import type { ReactTestInstance } from "../../types/ReactTestInstance";
import getComponentName from "../getComponentName/getComponentName";

const isTextInput = (node: ReactTestInstance) => {
  const name = getComponentName(node);
  const typeName = typeof node.type === "string" ? node.type : "";
  const isHostTextInput = typeName === "TextInput";
  const isTextInput = node.type === TextInput || isHostTextInput || name === "TextInput";

  return isTextInput;
};

export default isTextInput;
