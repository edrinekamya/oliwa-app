import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";

export default function Touchable({
  style,
  ...props
}: {} & TouchableHighlight["props"]) {
  return (
    <TouchableHighlight
      underlayColor={"rgba(255, 255, 255, 0.3)"}
      style={[styles.container, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 9999,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
