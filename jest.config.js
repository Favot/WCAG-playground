const baseConfig = {
  preset: "jest-expo",
  setupFiles: ["react-native-gesture-handler/jestSetup"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@?react-native|@?react-navigation|expo|@expo|@rn-primitives|nativewind|lucide-react-native|\\.pnpm|@testing-library|@react-native|react-native-svg))",
  ],
  testEnvironment: "jsdom",
};

module.exports = baseConfig;
