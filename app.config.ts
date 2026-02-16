import type { ConfigContext, ExpoConfig } from '@expo/config';
import appJson from './app.json';

export default function ({ config }: ConfigContext): ExpoConfig {
  const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

  return {
    ...config,
    ...appJson.expo,
    extra: {
      ...(appJson.expo.extra ?? {}),
      ...(config.extra ?? {}),
      storybookEnabled,
    },
  };
}
