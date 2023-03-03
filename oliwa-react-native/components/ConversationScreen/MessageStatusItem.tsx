import { Ionicons } from '@expo/vector-icons';
import { Message, MessageStatus } from '../../utils/types';

export default function MessageStatusItem({
  messageStatus,
}: Pick<Message, 'messageStatus'>) {
  return (
    <Ionicons
      name={
        messageStatus === MessageStatus.DELETED
          ? 'ios-remove-circle-outline'
          : messageStatus === MessageStatus.SENT
          ? 'ios-checkmark'
          : 'ios-checkmark-done-outline'
      }
      size={messageStatus === MessageStatus.DELETED ? 9 : 12}
      color={messageStatus === MessageStatus.READ ? '#89CFF0' : 'gray'}
    />
  );
}
