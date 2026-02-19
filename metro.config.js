const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

const baseConfig = withNativeWind(getDefaultConfig(__dirname), {
  input: './global.css',
  inlineRem: 16,
});

module.exports = storybookEnabled ? withStorybook(baseConfig) : baseConfig;
