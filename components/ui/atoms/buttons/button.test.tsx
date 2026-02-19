import { render as renderNative } from '@testing-library/react-native';
import { JSX } from 'react';
import { Text } from 'react-native';
import { Button, ButtonProps } from './button';

const renderComponent = (props: Partial<ButtonProps> = {}, child?: JSX.Element) => {
  return renderNative(<Button {...props}>{child}</Button>);
};

describe('Button Test', () => {
  describe('Accessibility', () => {
    it('uses the child text as the accessible name', () => {
      const { getByRole } = renderComponent({}, <Text>Primary action</Text>);
      expect(getByRole('button', { name: 'Primary action' })).toBeTruthy();
    });

    it('prefers accessibilityLabel over the child text', () => {
      const { getByRole } = renderComponent({
        accessibilityLabel: 'Upload',
      });

      expect(getByRole('button', { name: 'Upload' })).toBeTruthy();
    });

    it('forwards accessibilityHint to the Pressable', () => {
      const hint = 'Uploads the document';
      const { getByRole } = renderComponent({
        accessibilityHint: hint,
      });

      expect(getByRole('button').props.accessibilityHint).toBe(hint);
    });

    it('marks the disabled state on accessibilityState', () => {
      const { getByRole } = renderComponent({
        disabled: true,
      });

      expect(getByRole('button').props.accessibilityState?.disabled).toBe(true);
    });

    it('allows custom accessibilityState flags', () => {
      const { getByRole } = renderComponent({
        accessibilityState: { busy: true },
      });

      expect(getByRole('button').props.accessibilityState?.busy).toBe(true);
    });

    it('passes the accessibility engine matcher', () => {
      const { getByRole } = renderComponent({}, <Text>Primary action</Text>);

      expect(getByRole('button', { name: 'Primary action' })).toBeAccessible({
        rules: [
          'pressable-accessible-required',
          'pressable-label-required',
          'pressable-role-required',
          'disabled-state-required',
          'link-role-required',
          'no-empty-text',
          'checked-state-required',
        ],
      });
    });

    it('passes the accessibility engine matcher', () => {
      const { getByTestId } = renderComponent({});

      expect(getByTestId('test-button')).toBeAccessible();
    });
  });
});
