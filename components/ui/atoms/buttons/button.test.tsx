import { render as renderNative } from "@testing-library/react-native"
import { Text } from "react-native"
import { Button, ButtonProps } from "./button"

const demoAxeFailure = process.env.JEST_AXE_FAILURE === "1"

const renderComponent = (
  props: Partial<ButtonProps> = {},
  child = <Text>Primary action</Text>
) => {
  return renderNative(<Button {...props}>{child}</Button>)
}

describe("Button Test", () => {
  describe("Accessibility", () => {
    it("uses the child text as the accessible name", () => {
      const { getByRole } = renderComponent({}, <Text>Primary action</Text>)
      expect(getByRole("button", { name: "Primary action" })).toBeTruthy()
    })

    it("prefers accessibilityLabel over the child text", () => {
      const { getByRole } = renderComponent({
        accessibilityLabel: "Upload",
      })

      expect(getByRole("button", { name: "Upload" })).toBeTruthy()
    })

    it("forwards accessibilityHint to the Pressable", () => {
      const hint = "Uploads the document"
      const { getByRole } = renderComponent({
        accessibilityHint: hint,
      })

      expect(getByRole("button").props.accessibilityHint).toBe(hint)
    })

    it("marks the disabled state on accessibilityState", () => {
      const { getByRole } = renderComponent({
        disabled: true,
      })

      expect(getByRole("button").props.accessibilityState?.disabled).toBe(true)
    })

    it("allows custom accessibilityState flags", () => {
      const { getByRole } = renderComponent({
        accessibilityState: { busy: true },
      })

      expect(getByRole("button").props.accessibilityState?.busy).toBe(true)
    })
  })
})
