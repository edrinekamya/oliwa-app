import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { TouchableHighlight, StyleSheet } from "react-native";

export function IconButton({
  name,
  onPress,
  color,
}: {
  name: ComponentProps<typeof Ionicons>["name"];
  onPress(): void;
  color?: ComponentProps<typeof Ionicons>["color"];
}) {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <Ionicons name={name} size={22} color={color} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 99999,
    marginHorizontal: 5,
    padding: 5,
  },
});
