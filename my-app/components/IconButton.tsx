import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function IconButton({
  name,
  size,
  style,
  ...props
}: {
  name: React.ComponentProps<typeof Ionicons>["name"];

  size?: React.ComponentProps<typeof Ionicons>["size"];
} & TouchableHighlight["props"]) {
  const colorScheme = useColorScheme();
  return (
    <TouchableHighlight
      underlayColor={"rgba(255, 255, 255, 0.3)"}
      style={[style, styles.container]}
      {...props}
    >
      <Ionicons
        color={Colors[colorScheme].text}
        size={size ?? 22}
        name={name}
      />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 9999,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
