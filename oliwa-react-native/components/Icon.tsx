import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function Icon({
  name,
  size,
}: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  size?: React.ComponentProps<typeof Ionicons>["size"];
}) {
  const colorScheme = useColorScheme();
  return (
    <Ionicons color={Colors[colorScheme].text} size={size ?? 28} name={name} />
  );
}
