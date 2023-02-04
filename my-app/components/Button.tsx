import { memo } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
} from "react-native-reanimated";
import { Text } from "./Themed";

const INPUTRANGE = [0, 0.2, 0.4, 0.6, 0.8, 1];
const OUTPUTCOLORRANGE = [
  "rgba(255, 255, 255, 0)",
  "rgba(255, 255, 255, 0.1)",
  "rgba(255, 255, 255, 0.3)",
  "rgba(255, 255, 255, 0.1)",
  "rgba(255, 255, 255, 0.3)",
  "rgba(255, 255, 255, 0)",
];

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "green",
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
  rippleContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 9999,
    padding: 10,
  },
  ripple: {
    borderRadius: 9999,
    padding: 5,
    flex: 1,
  },
  title: {
    fontWeight: "700",
  },
});

function Button() {
  const scale = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scale.value,
      INPUTRANGE,
      OUTPUTCOLORRANGE
    );
    return { transform: [{ scale: scale.value }], backgroundColor };
  });
  return (
    <Pressable
      onPress={() => {
        scale.value = 0;
        scale.value = withTiming(1, { duration: 1000 });
      }}
      style={styles.container}
    >
      <Text style={styles.title}>Button</Text>
      <Animated.View style={[style, styles.rippleContainer]}>
        <Animated.View style={[style, styles.ripple]}>
          <Animated.View style={[style, styles.ripple]}>
            <Animated.View style={[style, styles.ripple]}>
              <Animated.View style={[style, styles.ripple]} />
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

export default memo(Button);
