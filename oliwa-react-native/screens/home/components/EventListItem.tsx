import { memo } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

function EventListItem() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} />
      <Text numberOfLines={2} style={styles.text}>
        Name of the event is supposed to fit on 2 lines
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    marginRight: 16,
  },
  image: {
    flex: 1,
    backgroundColor: "#eee",
    height: 120,
  },
  text: {
    fontSize: 14,
    color: "#bbb",
    fontFamily: "sans-light",
    paddingVertical: 8,
  },
});

export default memo(EventListItem);
