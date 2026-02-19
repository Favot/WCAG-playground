import { render } from "@testing-library/react-native";
import { Input, InputProp } from "./input";

const renderComponent = (props: InputProp) => {
  return render(<Input {...props} />);
};

describe("Input", () => {
  it("should not be accessible when accessibilityLabel is missing", () => {
    const { getByTestId } = renderComponent({ testID: "input" });

    const inputTest = getByTestId("input");

    expect(inputTest).not.toBeAccessible();
  });

  it("should be accessible when accessibilityLabel is present", () => {
    const { getByTestId } = renderComponent({ testID: "input", accessibilityLabel: "Input" });

    const inputTest = getByTestId("input");

    expect(inputTest).toBeAccessible();
  });

  it("should not be accessible when editable is false and the accessibilityState is not set", () => {
    const { getByTestId } = renderComponent({
      testID: "input",
      accessibilityLabel: "Input",
      editable: false,
    });

    const inputTest = getByTestId("input");

    expect(inputTest).not.toBeAccessible();
  });
  it("should be accessible when editable is false and the accessibilityState is set", () => {
    const { getByTestId } = renderComponent({
      testID: "input",
      accessibilityLabel: "Input",
      editable: false,
      accessibilityState: {
        disabled: true,
      },
    });

    const inputTest = getByTestId("input");

    expect(inputTest).toBeAccessible();
  });

  it("should be accessible when editable is false and the accessibilityState is set", () => {
    const { getByTestId } = renderComponent({
      testID: "input",
      accessibilityLabel: "Input",
      editable: false,
      accessibilityState: {
        disabled: true,
      },
    });

    const inputTest = getByTestId("input");

    expect(inputTest).toBeAccessible();
  });
});
