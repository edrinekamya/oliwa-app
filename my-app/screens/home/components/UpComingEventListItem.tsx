import { memo } from "react";
import { Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width - 32;

function UpComingEventListItem({ index }: { index: number }) {
  const backgroundColor = "#eee";
  const paddingRight = index % 2 ? 0 : 8;
  const paddingLeft = index % 2 ? 8 : 0;
  return (
    <TouchableOpacity style={[styles.container, { paddingLeft, paddingRight }]}>
      <Image blurRadius={1} style={styles.bar} />
      <Image style={[styles.image, { backgroundColor }]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 2,
    height: 80,
    marginVertical: 8,
  },
  bar: {
    height: 4,
    marginBottom: 4,
    backgroundColor: "#eee",
    borderRadius: 2,
  },
  image: {
    flex: 1,
    borderRadius: 4,
  },
});

export default memo(UpComingEventListItem);
