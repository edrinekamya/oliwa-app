import {
  forwardRef,
  memo,
  ReactNode,
  useCallback,
  useImperativeHandle,
} from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export type MenuProps = {
  position?: "nw" | "ne" | "sw" | "se";
  children?: ReactNode;
};

export type MenuRefProps = {
  open(): void;
};

const Menu = memo(
  forwardRef<MenuRefProps, MenuProps>(({ children, position = "ne" }, ref) => {
    const size = useSharedValue(0);
    const style = useAnimatedStyle(() => ({
      height: `${size.value}%`,
      width: `${size.value}%`,
      transform: [{ scale: size.value / 100 }],
    }));
    const open = useCallback(() => {
      size.value = withTiming(size.value == 0 ? 100 : 0, { duration: 3000 });
    }, []);
    useImperativeHandle(ref, () => ({ open }), [open]);
    const top = position == "nw" || position == "ne" ? 0 : undefined;
    const right = position == "se" || position == "ne" ? 0 : undefined;
    const left = position == "nw" || position == "sw" ? 0 : undefined;
    const bottom = position == "sw" || position == "se" ? 0 : undefined;
    return (
      <Animated.View
        style={[
          {
            alignItems:
              position == "ne" || position == "se" ? "flex-end" : "flex-start",
            justifyContent:
              position == "sw" || position == "se" ? "flex-end" : "flex-start",
            position: "absolute",
            backgroundColor: "transparent",
            top,
            right,
            bottom,
            left,
          },
          style,
        ]}
      >
        {children}
      </Animated.View>
    );
  })
);

export default Menu;
