import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import IconButton from "../../../components/IconButton";
import { Row } from "../../../components/Row";
import { Text } from "../../../components/Themed";
import Constants from "expo-constants";

export default function HomeHeader() {
  const navigation = useNavigation();
  return (
    <Row style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        Good morning
      </Text>
      <IconButton
        onPress={() => navigation.navigate("notifications")}
        name="ios-notifications-outline"
        style={styles.iconButton}
        size={28}
      />
      <IconButton
        onPress={() => navigation.navigate("notifications")}
        name="ios-timer-outline"
        style={styles.iconButton}
        size={28}
      />
      <IconButton
        onPress={() => navigation.navigate("settings")}
        name="ios-settings-outline"
        style={styles.iconButton}
        size={28}
      />
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
  },
  title: {
    flex: 1,
    fontFamily: "sans-heavy",
    fontSize: 22,
    textTransform: "capitalize",
  },
  iconButton: {
    marginLeft: 8,
  },
});
