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

export interface Message {
  messageId: string;
  senderId: string;
  conversationId: string;
  messageType: MessageType;
  message: string;
  timestamp: string;
  messageStatus: MessageStatus;
  isFirst?: boolean;
  forwarded?: boolean;
}
