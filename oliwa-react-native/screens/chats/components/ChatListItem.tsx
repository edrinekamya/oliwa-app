import { useNavigation } from "@react-navigation/native";
import { memo } from "react";
import { TouchableHighlight } from "react-native";
import { Circle } from "../../../components/Circle";
import { Row } from "../../../components/Row";
import { View, Text } from "../../../components/Themed";

function ChatListItem({ userID }: { userID: string }) {
  const strokeWidth = Math.random() > 0.5 ? 2 : 0;
  const navigation = useNavigation();
  return (
    <TouchableHighlight onPress={() => navigation.navigate("conversation")}>
      <Row style={{ padding: 10, width: "100%" }}>
        <Circle strokeWidth={strokeWidth}></Circle>
        <View style={{ paddingLeft: 10, flex: 1 }}>
          <Row style={{ justifyContent: "space-between" }}>
            <Text>Name</Text>
            <Text
              style={{
                color: "#aaa",
                fontFamily: "sans-light",
                fontSize: 10,
              }}
            >
              11:15
            </Text>
          </Row>
          <Row style={{ justifyContent: "space-between" }}>
            <Text style={{ color: "gray", fontSize: 12 }}>Message</Text>
          </Row>
        </View>
      </Row>
    </TouchableHighlight>
  );
}

export default memo(ChatListItem);
