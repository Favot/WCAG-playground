import "@/global.css";

import { NAV_THEME } from "@/lib/theme";
import { NavigationIndependentTree, ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { SafeAreaProvider } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const storybookEnabled =
    Constants.expoConfig?.extra?.storybookEnabled ??
    Constants.manifest?.extra?.storybookEnabled ??
    false;

  if (storybookEnabled) {
    const storybookModule = require("../.rnstorybook");
    const StorybookUIRoot = storybookModule?.StorybookUIRoot ?? storybookModule?.default ?? null;

    if (StorybookUIRoot) {
      return (
        <NavigationIndependentTree>
          <StorybookUIRoot />
        </NavigationIndependentTree>
      );
    }
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={NAV_THEME[colorScheme ?? "light"]}>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <Stack />
        <PortalHost />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
