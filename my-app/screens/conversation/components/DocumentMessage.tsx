import { StyleSheet, View } from "react-native";
import { Message } from "../types";

export function DocumentMessage({}: Pick<Message, "message" | "forwarded">) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
  },
});
