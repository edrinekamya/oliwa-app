import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Chip from "../../components/Chip";
import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../navigation/BottomTabNavigator";
import UpComingEventList from "./components/UpComingEventList";
import EventList from "./components/EventList";
import Row from "../../components/Row";
import useBottomTabBarPadding from "../../hooks/useBottomTabBarPadding";

const CATEGORIES = [
  "Sports",
  "Art & Culture",
  "Religious",
  "Parties",
  "Exhibitions",
];

export default function HomeScreen({ navigation }: RootTabScreenProps<"home">) {
  const paddingBottom = useBottomTabBarPadding();
  const sections = Array(10).fill(0);
  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map((category, index) => (
          <Chip style={styles.chip} title={category} key={index} />
        ))}
      </ScrollView>
      <UpComingEventList />
      {sections.map((section, index) => (
        <EventList key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
});
