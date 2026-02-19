import type { ReactTestInstanceNodeType } from "../../types/ReactTestInstance";
import { Text } from "react-native";

const isText = (type: ReactTestInstanceNodeType) => {
  return type === Text;
};

export default isText;
