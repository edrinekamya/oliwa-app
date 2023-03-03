import { Fragment, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import Chip from '../Chip';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { MessageGroup, MessageStatus } from '../../utils/types';
import ChatBubble from './ChatBubble';

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
  const alignSelf = isLeft ? 'flex-start' : 'flex-end';
  return (
    <View>
      {isFirstToday && (
        <Chip
          style={styles.chip}
          title={messageGroup.messages[0].timestamp.slice(0, 10)}
        />
      )}
      <View style={[styles.container, { alignSelf, alignItems: alignSelf }]}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    maxWidth: '75%',
    flexDirection: 'row',
  },
  sideBar: {
    width: 4,
    borderRadius: 25,
  },
  chip: {
    alignSelf: 'center',
  },
});

export default memo(MessageGroupItem);
