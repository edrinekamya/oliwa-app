import Constants from 'expo-constants';
import {
  createContext,
  forwardRef,
  memo,
  RefObject,
  useCallback,
  useImperativeHandle
} from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import IconButton from '../../components/IconButton';
import Row from '../../components/Row';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export type ContactListRef = {
  open(): void;
  close(): void;
};

export type ContactListProps = {};

export const ContactListContext =
  createContext<RefObject<ContactListRef> | null>(null);

const { height: HEIGHT } = Dimensions.get('screen');

export default memo(
  forwardRef<ContactListRef, ContactListProps>(function ContactListScreen(
    {},
    ref
  ) {
    const translateY = useSharedValue(HEIGHT);
    const colorScheme = useColorScheme();
    const open = useCallback(() => {
      translateY.value = withTiming(0);
    }, []);
    const close = useCallback(() => {
      translateY.value = withTiming(HEIGHT);
    }, []);
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }],
    }));
    const gesture = Gesture.Pan()
      .onUpdate((event) => {
        if (event.translationY > 0 && event.translationY < HEIGHT) {
          translateY.value = event.translationY;
        }
      })
      .onEnd(() => {
        if (translateY.value < HEIGHT / 4) {
          translateY.value = withSpring(0);
        } else {
          translateY.value = withTiming(HEIGHT);
        }
      });
    useImperativeHandle(ref, () => ({ open, close }), [open, close]);

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            styles.container,
            StyleSheet.absoluteFill,
            animatedStyle,
            {
              paddingTop: Constants.statusBarHeight + 16,
              backgroundColor: Colors[colorScheme].header,
              
            },
          ]}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Text style={styles.title}>Your contacts</Text>
            <IconButton size={30} onPress={close} name='chevron-down' />
          </Row>
        </Animated.View>
      </GestureDetector>
    );
  })
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    zIndex: 1,
    backgroundColor: 'red',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingBottom: 8,
  },
  title: {
    fontFamily: 'sans-medium',
    fontSize: 24,
  },
});
