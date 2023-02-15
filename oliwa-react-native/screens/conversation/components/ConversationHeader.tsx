import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { memo, useRef } from "react";
import { Image, StyleSheet } from "react-native";
import { Circle } from "../../../components/Circle";
import Icon from "../../../components/Icon";
import IconButton from "../../../components/IconButton";
import Menu, { MenuRefProps } from "../../../components/Menu";
import Row from "../../../components/Row";
import { Text } from "../../../components/Themed";
import Touchable from "../../../components/Touchable";

function ConversationHeader() {
  const navigation = useNavigation();
  const menu = useRef<MenuRefProps>(null);

  return (
    <Row style={styles.container}>
      <Touchable onPress={navigation.goBack}>
        <Row style={{ backgroundColor: "transparent" }}>
          <Icon name="chevron-back" />
          <Circle size={48} style={styles.avatar}>
            <Image />
          </Circle>
        </Row>
      </Touchable>
      <Row style={styles.headerTitle}>
        <Text numberOfLines={1} style={styles.title}>
          Name cannot exceed a single line
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
          size={20}
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
    paddingBottom: 4,
    paddingTop: Constants.statusBarHeight + 4,
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
