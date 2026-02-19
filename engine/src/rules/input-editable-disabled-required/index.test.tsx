import { TextInput } from 'react-native';
import check from '../../engine';
import rule from '.';

const run = (component: React.ReactElement) => check(component, { rules: [rule.id] });

describe('input-editable-disabled-required', () => {
  it('throws when editable is false and accessibilityState.disabled is missing', () => {
    const Input = () => <TextInput editable={false} />;
    expect(() => run(<Input />)).toThrow(rule.help.problem);
  });

  it('throws when editable is false and accessibilityState.disabled is false', () => {
    const Input = () => <TextInput editable={false} accessibilityState={{ disabled: false }} />;
    expect(() => run(<Input />)).toThrow(rule.help.problem);
  });

  it('does not throw when editable is false and accessibilityState.disabled is true', () => {
    const Input = () => <TextInput editable={false} accessibilityState={{ disabled: true }} />;
    expect(() => run(<Input />)).not.toThrow(rule.help.problem);
  });

  it('does not throw when editable is true', () => {
    const Input = () => <TextInput editable={true} />;
    expect(() => run(<Input />)).not.toThrow(rule.help.problem);
  });

  it('does not throw when editable is undefined', () => {
    const Input = () => <TextInput />;
    expect(() => run(<Input />)).not.toThrow(rule.help.problem);
  });
});
