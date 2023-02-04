import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function IconButton({
  name,
  ...props
}: {
  name: React.ComponentProps<typeof Ionicons>["name"];
} & TouchableHighlight["props"]) {
  const colorScheme = useColorScheme();
  return (
    <TouchableHighlight
      underlayColor={"#eee"}
      style={styles.container}
      {...props}
    >
      <Ionicons color={Colors[colorScheme].text} size={30} name={name} />
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
