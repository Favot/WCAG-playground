import { render } from '@testing-library/react-native';
import { Input, InputProp } from './input';

const renderComponent = (props: InputProp) => {
  return render(<Input {...props} />);
};

describe('Input', () => {
  it('should be accessible', () => {
    const { getByTestId } = renderComponent({ testID: 'input' });

    const inputTest = getByTestId('input');

    expect(inputTest).toBeAccessible();
  });
});
