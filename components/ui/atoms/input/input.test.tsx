import { render } from '@testing-library/react-native';
import { Input, InputProp } from './input';

const renderComponent = (props: InputProp) => {
  return render(<Input {...props} />);
};

describe('Input', () => {
  it('should not be accessible when accessibilityLabel is missing', () => {
    const { getByTestId } = renderComponent({ testID: 'input' });

    const inputTest = getByTestId('input');

    expect(inputTest).not.toBeAccessible();
  });

  it('should be accessible when accessibilityLabel is present', () => {
    const { getByTestId } = renderComponent({ testID: 'input', accessibilityLabel: 'Input' });

    const inputTest = getByTestId('input');

    expect(inputTest).toBeAccessible();
  });

  it('should not be accessible when name is not present', () => {
    const { getByTestId } = renderComponent({
      testID: 'input',
      accessibilityLabel: 'Input',
    });

    const inputTest = getByTestId('input');

    expect(inputTest).toBeAccessible();
  });
});
