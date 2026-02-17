import { cleanup, render as renderNative } from '@testing-library/react-native';
import React, { PropsWithChildren } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getComponentName from './getComponentName';

const Tree = () => {
  return (
    <SafeAreaView testID={'safe_area_view'}>
      <>
        <ScrollView testID={'scroll_view'}>
          <View testID={'view'}>
            <TouchableHighlight testID={'t_highlight'}>
              <Text testID={'text'}>Test</Text>
            </TouchableHighlight>
            <TouchableOpacity testID={'t_opacity'}>
              <View>
                <Text>Test2</Text>
              </View>
              <View>
                <Text>Test2</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Pressable testID={'pressable'}>
            <Switch testID={'switch'} />
          </Pressable>
          <Modal testID={'modal'} />
          <Image source={{}} testID={'image'} />
          <FlatList testID={'flat_list'} data={[]} renderItem={() => <View />} />
          <KeyboardAvoidingView testID={'keyboard_avoiding_view'}>
            <TextInput testID={'text_input'} />
            <TouchableWithoutFeedback testID={'t_without_feedback'}>
              <Text>A</Text>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

describe('should recognize built-in components', () => {
  let UNSAFE_root: ReturnType<typeof renderNative>['UNSAFE_root'];

  beforeEach(() => {
    ({ UNSAFE_root } = renderNative(<Tree />));
  });

  afterEach(() => {
    cleanup();
  });

  it("should return 'Text' for <Text />", () => {
    const textNode = UNSAFE_root.findByProps({ testID: 'text' });
    expect(getComponentName(textNode)).toBe('Text');
  });

  it("should return 'View' for <View />", () => {
    const viewNode = UNSAFE_root.findByProps({ testID: 'view' });
    expect(getComponentName(viewNode)).toBe('View');
  });

  it("should return 'TouchableOpacity' for <TouchableOpacity />", () => {
    const tOpacityNode = UNSAFE_root.findByProps({ testID: 't_opacity' });
    expect(getComponentName(tOpacityNode)).toBe('TouchableOpacity');
  });

  it("should return 'TouchableHighlight' for <TouchableHighlight />", () => {
    const tHightlightNode = UNSAFE_root.findByProps({ testID: 't_highlight' });
    expect(getComponentName(tHightlightNode)).toBe('TouchableHighlight');
  });

  it("should return 'TouchableWithoutFeedback' for <TouchableWithoutFeedback />", () => {
    const twofNode = UNSAFE_root.findByProps({ testID: 't_without_feedback' });
    expect(getComponentName(twofNode)).toBe('TouchableWithoutFeedback');
  });

  it("should return 'Pressable' for <Pressable />", () => {
    const pressableNode = UNSAFE_root.findByProps({ testID: 'pressable' });
    expect(getComponentName(pressableNode)).toBe('Pressable');
  });

  it("should return 'Switch' for <Switch />", () => {
    const switchNode = UNSAFE_root.findByProps({ testID: 'switch' });
    expect(getComponentName(switchNode)).toBe('Switch');
  });

  it("should return 'Modal' for <Modal />", () => {
    const modalNode = UNSAFE_root.findByProps({ testID: 'modal' });
    expect(getComponentName(modalNode)).toBe('Modal');
  });

  it("should return 'Image' for <Image />", () => {
    const imageNode = UNSAFE_root.findByProps({ testID: 'image' });
    expect(getComponentName(imageNode)).toBe('Image');
  });

  it("should return 'FlatList' for <FlatList />", () => {
    const flatListNode = UNSAFE_root.findByProps({ testID: 'flat_list' });
    expect(getComponentName(flatListNode)).toBe('FlatList');
  });

  it("should return 'TextInput' for <TextInput />", () => {
    const textInputNode = UNSAFE_root.findByProps({ testID: 'text_input' });
    expect(getComponentName(textInputNode)).toBe('TextInput');
  });

  it("should return 'RNCSafeAreaView' for <SafeAreaView />", () => {
    const safeAreaNode = UNSAFE_root.findByProps({ testID: 'safe_area_view' });
    expect(getComponentName(safeAreaNode)).toBe('RNCSafeAreaView');
  });

  it("should return 'KeyboardAvoidingView' for <KeyboardAvoidingView />", () => {
    const node = UNSAFE_root.findByProps({ testID: 'keyboard_avoiding_view' });
    expect(getComponentName(node)).toBe('KeyboardAvoidingView');
  });
});

it("should return 'Custom' for <Custom />", () => {
  const Custom = (props: PropsWithChildren<ViewProps>) => <View {...props} />;

  const { UNSAFE_root } = renderNative(
    <View testID={'view'}>
      <Custom testID={'custom'}>
        <Text testID={'text'}>A</Text>
      </Custom>
    </View>
  );

  const customNode = UNSAFE_root.findByProps({ testID: 'custom' });
  expect(getComponentName(customNode)).toBe('Custom');
});

it("should return 'Unknown' for components without defined names", () => {
  const { UNSAFE_root } = renderNative(<View testID={'view'} />);

  const viewNode = UNSAFE_root.findByProps({ testID: 'view' });

  // Simulate a component without a name or displayName by cloning the type
  // (native component function names are read-only in Node).
  const anonymousComponent = {
    ...viewNode,
    type: { ...viewNode.type, name: null, displayName: null },
  } as typeof viewNode;

  expect(getComponentName(anonymousComponent)).toBe('Unknown');
});
