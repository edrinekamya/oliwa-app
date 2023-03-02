import { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Row from '../../../components/Row';
import { Text } from '../../../components/Themed';
import { Message, MessageStatus, MessageType } from '../types';
import DocumentMessage from './DocumentMessage';
import ImageMessage from './ImageMessage';
import MessageStatusItem from './MessageStatusItem';
import VideoMessage from './VideoMessage';

export type ChatBubbleProps = {
  isLeft?: boolean;
  message: Message;
  backgroundColor: string;
  isLast?: boolean;
};

const borderRadius = 24;

function ChatBubble({
  isLeft,
  message: { message, messageType, messageStatus },
  backgroundColor,
  isLast,
}: ChatBubbleProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: isLeft ? 'flex-start' : 'flex-end',
      }}>
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor,
            borderTopEndRadius: isLeft ? borderRadius : 0,
            borderBottomEndRadius: isLeft ? borderRadius : 0,
            marginBottom: isLast ? 0 : 4,
            marginLeft: isLeft ? 4 : 0,
            marginRight: isLeft ? 0 : 4,
          },
        ]}>
        {messageType === MessageType.TEXT ? (
          <Text style={[styles.text]}>{message}</Text>
        ) : messageType === MessageType.AUDIO ? (
          <DocumentMessage message={message} />
        ) : messageType === MessageType.IMAGE ? (
          <ImageMessage message={message} />
        ) : (
          <VideoMessage message={message} />
        )}
      </TouchableOpacity>
      {!isLeft && (
        <View
          style={{
            width: 4,
            backgroundColor:
              messageStatus == MessageStatus.READ
                ? 'blue'
                : messageStatus == MessageStatus.RECEIVED
                ? 'green'
                : 'gray',
            borderRadius,
            marginBottom: isLast ? 0 : 4,
          }}
        />
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderTopStartRadius: borderRadius,
    borderBottomStartRadius: borderRadius,
  },
  text: {
    flexWrap: 'wrap',
    fontSize: 16,
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: 9,
    color: '#bbb',
    marginRight: 2,
  },
  arrow: {
    backgroundColor: 'transparent',
  },
});

export default memo(ChatBubble);
