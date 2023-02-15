export enum MessageType {
  IMAGE,
  TEXT,
  DOCUMENT,
  VIDEO,
}

export enum MessageStatus {
  SENT,
  RECEIVED,
  READ,
  DELETED,
}

export interface MessageGroup {
  messages: Message[];
  messageGroupId: string;
  senderId: string;
  conversationId: string;
}

export interface Message {
  messageId: string;
  messageType: MessageType;
  message: string;
  timestamp: string;
  messageStatus: MessageStatus;
  forwarded?: boolean;
}

export const messageGroups: MessageGroup[] = Array(20)
  .fill(0)
  .map((_, i) => ({
    messageGroupId: String(Math.random()),
    conversationId: "1",
    senderId: "2",
    messages: Array(Math.ceil(Math.random() * 5))
      .fill(0)
      .map(() => ({
        messageId: String(Math.random()),
        message: Math.random() > 0.5 ? "Hello, how are you doing" : "Hi",
        messageStatus: MessageStatus.READ,
        messageType: MessageType.TEXT,
        timestamp: Date(),
      })),
  }));
