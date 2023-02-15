import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Touchable from "./Touchable";

export default function IconButton({
  name,
  size,
  ...props
}: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  size?: React.ComponentProps<typeof Ionicons>["size"];
} & TouchableHighlight["props"]) {
  const colorScheme = useColorScheme();
  return (
    <Touchable {...props}>
      <Ionicons
        color={Colors[colorScheme].text}
        size={size ?? 28}
        name={name}
      />
    </Touchable>
  );
}
