import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function Input({ style, ...props }: TextInputProps) {
  const colorScheme = useColorScheme();
  return (
    <TextInput
      placeholderTextColor={"#eee"}
      style={[styles.container, style, { color: Colors[colorScheme].text }]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#cecece",
    fontFamily: "sans-light",
  },
});
