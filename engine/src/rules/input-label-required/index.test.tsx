import { TextInput } from 'react-native';
import check from '../../engine';
import rule from '.';

const run = (component: React.ReactElement) => check(component, { rules: [rule.id] });

describe('input-label-required', () => {
  it('throws if TextInput has no accessibilityLabel', () => {
    const Input = () => <TextInput />;
    expect(() => run(<Input />)).toThrow(rule.help.problem);
  });

  it('throws if TextInput has an empty accessibilityLabel', () => {
    const Input = () => <TextInput accessibilityLabel="   " />;
    expect(() => run(<Input />)).toThrow(rule.help.problem);
  });

  it('does not throw if TextInput has a non-empty accessibilityLabel', () => {
    const Input = () => <TextInput accessibilityLabel="Email" />;
    expect(() => run(<Input />)).not.toThrow(rule.help.problem);
  });
});
