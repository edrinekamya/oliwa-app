import { memo } from "react";
import { StyleSheet, View } from "react-native";
import Chip from "../../../components/Chip";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { MessageGroup } from "../types";
import ChatBubble from "./ChatBubble";

export type MessageGroupItemProps = {
  isLeft?: boolean;
  isFirst?: boolean;
  isFirstToday?: boolean;
  messageGroup: MessageGroup;
};

function MessageGroupItem({
  isLeft,
  isFirstToday,
  messageGroup,
}: MessageGroupItemProps) {
  const colorScheme = useColorScheme();
  const backgroundColor = isLeft
    ? Colors[colorScheme].chatBubbleLeft
    : Colors[colorScheme].chatBubbleRight;
  const alignSelf = isLeft ? "flex-start" : "flex-end";
  return (
    <View>
      {isFirstToday && (
        <Chip style={styles.chip} title={messageGroup.messages[0].timestamp} />
      )}
      <View style={[styles.container, { alignSelf }]}>
        {isLeft && <View style={[styles.sideBar]} />}
        <View>
          {messageGroup.messages.map((message, index) => (
            <ChatBubble
              backgroundColor={backgroundColor}
              isLeft={isLeft}
              key={message.messageId}
              message={message}
              isLast={index == messageGroup.messages.length - 1}
            />
          ))}
        </View>
        {!isLeft && <View style={styles.sideBar} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    maxWidth: "75%",
    flexDirection: "row",
  },
  sideBar: {
    width: 4,
    backgroundColor: "coral",
  },
  chip: {
    alignSelf: "center",
  },
});

export default memo(MessageGroupItem);
