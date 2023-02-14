import { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { View } from "./Themed";

export function Circle({
  size = 64,
  strokeWidth = 2,
  strokeColor = "red",
  style,
  children,
  onPress,
}: {
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  children?: ReactNode;
  style?: ViewProps["style"];
  onPress?: TouchableOpacity["props"]["onPress"];
}) {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          height: size,
          width: size,
          padding: strokeWidth,
          backgroundColor: strokeColor,
        },
        style,
        styles.container,
      ]}
    >
      <View
        style={[
          styles.stroke,
          {
            padding: strokeWidth,
            backgroundColor: Colors[colorScheme].background,
          },
        ]}
      >
        <View style={styles.contentContainer} children={children} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 99999,
    justifyContent: "center",
  },
  stroke: {
    justifyContent: "center",
    borderRadius: 999,
    flex: 1,
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#ddd",
    borderRadius: 999,
  },
});
