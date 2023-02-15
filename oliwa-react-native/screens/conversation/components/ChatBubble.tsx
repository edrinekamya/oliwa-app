import { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Row from "../../../components/Row";
import { Text } from "../../../components/Themed";
import { Message, MessageType } from "../types";
import DocumentMessage from "./DocumentMessage";
import ImageMessage from "./ImageMessage";
import MessageStatusItem from "./MessageStatusItem";
import VideoMessage from "./VideoMessage";

export type ChatBubbleProps = {
  isLeft?: boolean;
  message: Message;
  backgroundColor: string;
  isLast?: boolean;
};

const borderRadius = 16;

function ChatBubble({
  isLeft,
  message,
  backgroundColor,
  isLast,
}: ChatBubbleProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor,
          borderTopEndRadius: isLeft ? borderRadius : 0,
          borderBottomEndRadius: isLeft ? borderRadius : 0,
          borderTopStartRadius: isLeft ? 0 : borderRadius,
          borderBottomStartRadius: isLeft ? 0 : borderRadius,
          marginBottom: isLast ? 0 : 4,
          marginLeft: isLeft ? 4 : 0,
          marginRight: isLeft ? 0 : 4,
        },
      ]}
    >
      {message.messageType === MessageType.TEXT ? (
        <Text style={[styles.text]}>{message.message}</Text>
      ) : message.messageType === MessageType.DOCUMENT ? (
        <DocumentMessage
          forwarded={message.forwarded}
          message={message.message}
        />
      ) : message.messageType === MessageType.IMAGE ? (
        <ImageMessage forwarded={message.forwarded} message={message.message} />
      ) : (
        <VideoMessage forwarded={message.forwarded} message={message.message} />
      )}
      <Row style={{ backgroundColor, alignSelf: "flex-end" }}>
        <Text style={[styles.time]}>11:11</Text>
        {!isLeft && <MessageStatusItem messageStatus={message.messageStatus} />}
      </Row>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  text: {
    flexWrap: "wrap",
    fontSize: 13,
    paddingRight: 10,
  },
  time: {
    alignSelf: "flex-end",
    fontSize: 9,
    color: "#bbb",
    marginRight: 2,
  },
  arrow: {
    backgroundColor: "transparent",
  },
});

export default memo(ChatBubble);
