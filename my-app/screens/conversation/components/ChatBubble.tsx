import { memo } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Row } from "../../../components/Row";
import { Text } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { Message, MessageType, MessageStatus } from "../types";
import { DocumentMessage } from "./DocumentMessage";
import { ImageMessage } from "./ImageMessage";
import { MessageStatusItem } from "./MessageStatusItem";
import { VideoMessage } from "./VideoMessage";

export type ChatBubbleProps = {
  isLeft?: boolean;
  isFirst?: boolean;
  isFirstToday?: boolean;
  message: Message;
};

export const sampleMessage: Message = {
  message: "Hi",
  messageId: "1",
  messageStatus: MessageStatus.READ,
  messageType: MessageType.TEXT,
  conversationId: "1",
  senderId: "1",
  timestamp: Date(),
  isFirst: true,
  forwarded: false,
};

export const sampleMessage1: Message = {
  message:
    "Hey, how are you. It has been a long time with no see, how gave you been",
  messageId: "1",
  messageStatus: MessageStatus.READ,
  messageType: MessageType.TEXT,
  conversationId: "1",
  senderId: "1",
  timestamp: Date(),
  isFirst: true,
  forwarded: false,
};

export const sampleMessage2: Message = {
  message: "Check this out",
  messageId: "1",
  messageStatus: MessageStatus.READ,
  messageType: MessageType.DOCUMENT,
  conversationId: "1",
  senderId: "1",
  timestamp: Date(),
  isFirst: true,
  forwarded: false,
};

const borderRadius = 16;
const padding = 1;

function ChatBubble({ isLeft, message }: ChatBubbleProps) {
  const colorScheme = useColorScheme();
  const backgroundColor = isLeft
    ? Colors[colorScheme].chatBubbleLeft
    : Colors[colorScheme].chatBubbleRight;
  const borderTopEndRadius = !isLeft && message.isFirst ? 0 : borderRadius;
  const borderTopStartRadius = isLeft && message.isFirst ? 0 : borderRadius;
  const alignSelf = isLeft ? "flex-start" : "flex-end";
  const marginTop = message.isFirst ? 25 : 10;

  return (
    <TouchableHighlight
      style={[
        styles.container,
        {
          backgroundColor,
          alignSelf,
          borderTopEndRadius,
          borderTopStartRadius,
          marginTop,
        },
      ]}
    >
      <View
        style={[
          {
            backgroundColor: Colors[colorScheme].background,
            borderRadius,
            borderTopEndRadius,
            borderTopStartRadius,
          },
        ]}
      >
        <View
          style={[
            styles.contentContainer,
            {
              backgroundColor,
              alignSelf,
              borderTopEndRadius,
              borderTopStartRadius,
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
            <ImageMessage
              forwarded={message.forwarded}
              message={message.message}
            />
          ) : (
            <VideoMessage
              forwarded={message.forwarded}
              message={message.message}
            />
          )}
          <Row style={{ backgroundColor, alignSelf: "flex-end" }}>
            <Text style={[styles.time]}>11:11</Text>
            {!isLeft && (
              <MessageStatusItem messageStatus={message.messageStatus} />
            )}
          </Row>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding,
    borderRadius,
    maxWidth: "75%",
  },
  contentContainer: {
    borderRadius,
    margin: padding,
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
