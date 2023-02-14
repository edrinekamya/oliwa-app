import { memo } from "react";
import { FlatList, StyleSheet } from "react-native";
import EventListItem from "./EventListItem";
import { Text, View } from "../../../components/Themed";

function EventList() {
  const data = Array(10).fill(0);
  const renderItem = () => <EventListItem />;
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Title of section</Text>
      <FlatList data={data} horizontal renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sectionHeader: {
    paddingVertical: 16,
    fontSize: 22,
    fontFamily: "sans-medium",
  },
});

export default memo(EventList);
