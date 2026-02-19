import type { ReactTestInstanceNodeType } from '../types/ReactTestInstance';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

const isPressable = (type: ReactTestInstanceNodeType) => {
  return (
    type === TouchableHighlight ||
    type === TouchableOpacity ||
    type === TouchableNativeFeedback ||
    type === TouchableWithoutFeedback ||
    type === Pressable
  );
};

export default isPressable;
