import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { FlatList } from 'react-native';
import useBottomTabBarPadding from '../../../hooks/useBottomTabBarPadding';
import ChatListItem from './ChatListItem';
import StatusList from './StatusList';

function ChatList() {
  const data = Array(100).fill('');
  const paddingBottom = useBottomTabBarPadding();
  const renderItem = ({ item }: { item: string }) => (
    <ChatListItem userID={item} />
  );
  return (
    <FlatList
      ListHeaderComponent={StatusList}
      data={data}
      contentContainerStyle={{
        paddingBottom,
        paddingHorizontal: 16,
        paddingTop: 16,
      }}
      renderItem={renderItem}
    />
  );
}

export default memo(ChatList);
