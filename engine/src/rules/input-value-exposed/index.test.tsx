import { TextInput } from 'react-native';
import check from '../../engine';
import rule from '.';

const run = (component: React.ReactElement) => check(component, { rules: [rule.id] });

describe('input-value-exposed', () => {
  it('throws when value is set and accessibilityValue.text is missing', () => {
    const Input = () => <TextInput value="Email" />;
    expect(() => run(<Input />)).toThrow(rule.help.problem);
  });

  it('does not throw when value is set and accessibilityValue.text is provided', () => {
    const Input = () => <TextInput value="Email" accessibilityValue={{ text: 'Email' }} />;
    expect(() => run(<Input />)).not.toThrow(rule.help.problem);
  });

  it('does not throw when secureTextEntry is true', () => {
    const Input = () => <TextInput value="Secret" secureTextEntry={true} />;
    expect(() => run(<Input />)).not.toThrow(rule.help.problem);
  });

  it('does not throw when value is undefined', () => {
    const Input = () => <TextInput />;
    expect(() => run(<Input />)).not.toThrow(rule.help.problem);
  });
});
