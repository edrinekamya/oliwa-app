import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { RootStackScreenProps } from "../../navigation/RootNavigator";

export default function SettingsScreen({
  navigation,
}: RootStackScreenProps<"settings">) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
