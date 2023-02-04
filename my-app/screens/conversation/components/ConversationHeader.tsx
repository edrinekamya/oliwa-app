import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { memo } from "react";
import { Image, StyleSheet, TouchableHighlight } from "react-native";
import { Circle } from "../../../components/Circle";
import { IconButton } from "../../../components/HeaderIcon";
import { Row } from "../../../components/Row";
import { Text } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";

function ConversationHeader() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <Row style={styles.container}>
      <Row>
        <Ionicons
          name="chevron-back"
          color={Colors[colorScheme].text}
          onPress={navigation.goBack}
          size={30}
        />
        <Circle size={48} style={styles.avatar}>
          <Image />
        </Circle>
      </Row>
      <Text numberOfLines={1} style={styles.title}>
        Name is damn long
      </Text>
      <Row>
        <IconButton
          onPress={() => navigation.navigate("assistant")}
          color={Colors[colorScheme].text}
          name="ios-videocam-outline"
        />

        <IconButton
          onPress={() => navigation.navigate("assistant")}
          color={Colors[colorScheme].text}
          name="ios-call-outline"
        />
        <IconButton
          onPress={() => navigation.navigate("assistant")}
          color={Colors[colorScheme].text}
          name="ellipsis-vertical-outline"
        />
      </Row>
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    justifyContent: "space-between",
  },
  avatar: {
    alignSelf: "flex-start",
  },
  title: {
    textTransform: "capitalize",
    fontFamily: "sans-medium",
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

export default memo(ConversationHeader);
