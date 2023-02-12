import { StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { Text } from "./Themed";

export type ChipProps = {
  title?: string;
} & TouchableOpacity["props"];

function Chip({ title, style, ...props }: ChipProps) {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme].chip;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, { backgroundColor }, style]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 9999,
    padding: 10,
  },
  title: {
    fontSize: 16,
  },
});

export default Chip;
