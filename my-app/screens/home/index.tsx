import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../navigation/BottomTabNavigator";

export default function HomeScreen({ navigation }: RootTabScreenProps<"home">) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
