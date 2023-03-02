import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { View } from '../../components/Themed';
import useBottomTabBarPadding from '../../hooks/useBottomTabBarPadding';
import ChatListItem from './components/ChatListItem';
import FloatingButton from './components/FloatingButton';
import StatusList from './components/StatusList';

export default function ChatsScreen() {
  const scrollFraction = useSharedValue(0);
  const data = Array(100).fill('');
  const paddingBottom = useBottomTabBarPadding();
  const renderItem = ({ item }: { item: string }) => (
    <ChatListItem userID={item} />
  );
  const onScroll = useAnimatedScrollHandler((event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event;
    scrollFraction.value =
      (layoutMeasurement.height + contentOffset.y) / contentSize.height;
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ListHeaderComponent={StatusList}
        data={data}
        onScroll={onScroll}
        contentContainerStyle={[
          {
            paddingBottom: paddingBottom + 64,
          },
          styles.flatlist,
        ]}
        renderItem={renderItem}
      />
      <FloatingButton scrollFraction={scrollFraction} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    paddingTop: 16,
  },
});
