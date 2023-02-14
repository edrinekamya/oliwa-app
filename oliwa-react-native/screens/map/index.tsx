import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootTabScreenProps } from "../../navigation/BottomTabNavigator";

export default function MapScreen({}: RootTabScreenProps<"map">) {
  return (
    <GestureHandlerRootView style={styles.container}></GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
