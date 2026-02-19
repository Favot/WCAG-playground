import { TextInput } from 'react-native'

export type InputProp = React.ComponentProps<typeof TextInput>;

export const Input = (props: InputProp) => {

  return <TextInput {...props} />;
};
