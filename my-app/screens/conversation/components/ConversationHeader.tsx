import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { memo, useRef } from "react";
import { Image, StyleSheet, TouchableHighlight } from "react-native";
import { Circle } from "../../../components/Circle";
import IconButton from "../../../components/IconButton";
import Menu, { MenuRefProps } from "../../../components/Menu";
import { Row } from "../../../components/Row";
import { Text } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";

function ConversationHeader() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const menu = useRef<MenuRefProps>(null);

  return (
    <Row style={styles.container}>
      <Row>
        <IconButton name="arrow-back" onPress={navigation.goBack} size={26} />
        <Circle size={48} style={styles.avatar}>
          <Image />
        </Circle>
      </Row>
      <Row style={styles.headerTitle}>
        <Text numberOfLines={1} style={styles.title}>
          Name is damn long
        </Text>
      </Row>
      <Row>
        <IconButton
          style={styles.icon}
          size={25}
          onPress={() => navigation.navigate("assistant")}
          name="ios-videocam-outline"
        />
        <IconButton
          style={styles.icon}
          onPress={() => navigation.navigate("assistant")}
          name="ios-call-outline"
        />
        <IconButton
          style={styles.icon}
          onPress={() => menu.current?.open()}
          size={20}
          name="ellipsis-vertical-outline"
        />
      </Row>
      <Menu ref={menu} />
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: Constants.statusBarHeight,
  },
  avatar: {},
  headerTitle: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textTransform: "capitalize",
    fontFamily: "sans-medium",
    fontSize: 16,
  },
  icon: {
    marginLeft: 5,
  },
});

export default memo(ConversationHeader);
