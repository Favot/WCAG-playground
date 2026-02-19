export default {
  heart: {
    "32px": require("./heart_32px.png"),
  },
  filledHeart: {
    "16px": require("./filled_heart_16px.png"),
    "24px": require("./filled_heart_24px.png"),
    "32px": require("./filled_heart_32px.png"),
  },
  checkbox: {
    "512px": require("./checkbox_512px.png"),
  },
};

// Jest treats any file inside __tests__ as a test suite.
// Provide a trivial test so the suite isn't considered empty.
test("assets module loads", () => {
  expect(true).toBe(true);
});
