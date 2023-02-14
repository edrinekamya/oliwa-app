import {
  forwardRef,
  memo,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { View } from "./Themed";

export type ActionSheetProps = {
  children?: ReactNode;
  maxHeight?: number;
};

const MAXHEIGHT = Dimensions.get("window").height;

export type ActionSheetRefProps = {
  open(): void;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: "#222",
    elevation: 2,
  },
  dragIndicator: {
    height: 5,
    backgroundColor: "gray",
    marginVertical: 15,
    width: 60,
    alignSelf: "center",
    borderRadius: 999,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

const ActionSheet = memo(
  forwardRef<ActionSheetRefProps, ActionSheetProps>(
    ({ children, maxHeight }, ref) => {
      const height = useSharedValue<number | "auto">(0);
      const initialHeight = useRef(0);
      const translateY = useSharedValue(0);
      const style = useAnimatedStyle(() => ({
        height: height.value,
      }));
      const gesture = Gesture.Pan()
        .onBegin((_e) => {
          if (height.value == "auto") height.value = initialHeight.current;
          translateY.value = 0;
        })
        .onUpdate((e) => {
          if (height.value != "auto")
            height.value += translateY.value - e.translationY;
          translateY.value = e.translationY;
        })
        .onEnd((e) => {});

      const onLayout = useCallback(
        (e: { nativeEvent: { layout: { height: number } } }) => {
          initialHeight.current = e.nativeEvent.layout.height;
        },
        []
      );
      const open = useCallback(() => {
        height.value = height.value == 0 ? withTiming("auto") : 0;
      }, []);
      useImperativeHandle(ref, () => ({ open }), [open]);
      return (
        <GestureDetector gesture={gesture}>
          <Animated.View style={[style, styles.container]}>
            <View onLayout={onLayout} style={styles.contentContainer}>
              <View style={styles.dragIndicator} />
              {children}
            </View>
          </Animated.View>
        </GestureDetector>
      );
    }
  )
);
export default ActionSheet;
