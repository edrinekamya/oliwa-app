import { memo } from "react";
import { FlatList } from "react-native";
import ChatListItem from "./ChatListItem";
import StatusList from "./StatusList";

function ChatList() {
  const data = Array(100).fill("");
  const renderItem = ({ item }: { item: string }) => (
    <ChatListItem userID={item} />
  );
  return (
    <FlatList
      ListHeaderComponent={StatusList}
      data={data}
      renderItem={renderItem}
    />
  );
}

export default memo(ChatList);
