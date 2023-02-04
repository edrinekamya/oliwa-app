import { memo } from "react";
import { Circle } from "../../../components/Circle";
import { Row } from "../../../components/Row";
import { View, Text } from "../../../components/Themed";

function ChatListItem({ userID }: { userID: string }) {
  const strokeWidth = Math.random() > 0.5 ? 2 : 0;
  return (
    <Row style={{ padding: 10, width: "100%" }}>
      <Circle strokeWidth={strokeWidth}></Circle>
      <View style={{ paddingLeft: 10, flex: 1 }}>
        <Row style={{ justifyContent: "space-between" }}>
          <Text>Name</Text>
          <Text>time</Text>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Text>Message</Text>
          <Text>s or c</Text>
        </Row>
      </View>
    </Row>
  );
}

export default memo(ChatListItem);
