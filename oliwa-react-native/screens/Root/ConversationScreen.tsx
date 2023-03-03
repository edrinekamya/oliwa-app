import { Ionicons } from '@expo/vector-icons';
import { ComponentProps, Fragment } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import ConversationEntry from '../../components/ConversationScreen/ConversationEntry';
import MessageGroupItem from '../../components/ConversationScreen/MessageGroupItem';
import IconButton from '../../components/IconButton';
import SafeAreaView from '../../components/SafeAreaView';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { RootStackScreenProps } from '../../navigation/RootNavigator';
import { MessageGroup, messageGroups } from '../../utils/types';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('screen');

function EntryAction({
  name,
  onPress,
  color,
}: {
  name: ComponentProps<typeof Ionicons>['name'];
  onPress: () => void;
  color?: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{ padding: 16, backgroundColor: '#ffffff11', borderRadius: 16 }}
      android_disableSound
      android_ripple={{
        radius: 40,
      }}>
      <Ionicons name={name} size={40} color={color ?? '#eee'} />
    </Pressable>
  );
}

export default function ConversationScreen({
  navigation,
}: RootStackScreenProps<'Conversation'>) {
  const translateY = useSharedValue(HEIGHT);
  const translateX = useDerivedValue(() =>
    interpolate(translateY.value, [0, HEIGHT], [0, WIDTH])
  );
  const colorScheme = useColorScheme();
  const open = () => {
    translateY.value = withTiming(0);
  };
  const toggle = () => {
    translateY.value = withSpring(HEIGHT);
  };
  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: -translateX.value },
      { translateY: translateY.value },
    ],
  }));
  const renderItem = ({
    item,
    index,
  }: {
    item: MessageGroup;
    index: number;
  }) => (
    <MessageGroupItem
      messageGroup={item}
      isLeft={index % 2 == 0}
      isFirstToday={Math.random() < 0.1}
    />
  );
  return (
    <SafeAreaView
      headerRight={
        <Fragment>
          <IconButton
            style={styles.icon}
            size={25}
            onPress={() => navigation.navigate('Assistant')}
            name='ios-videocam-outline'
          />
          <IconButton
            style={styles.icon}
            size={20}
            onPress={() => navigation.navigate('Assistant')}
            name='ios-call-outline'
          />
          <IconButton
            style={styles.icon}
            size={20}
            name='ellipsis-vertical-outline'
          />
        </Fragment>
      }>
      <FlatList
        overScrollMode='never'
        contentContainerStyle={{ paddingHorizontal: 8 }}
        inverted
        data={messageGroups}
        renderItem={renderItem}
      />
      <ConversationEntry open={open} />
      <Animated.View
        style={[
          {
            position: 'absolute',
            zIndex: 1,
            height: '100%',
            width: '100%',
          },
          style,
        ]}>
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
          onPress={toggle}>
          <Animated.View
            style={[
              {
                alignSelf: 'center',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                paddingVertical: 50,
                borderTopStartRadius: 30,
                borderTopEndRadius: 30,
              },
              { backgroundColor: Colors[colorScheme].header },
            ]}>
            <EntryAction
              color='#87ceeb'
              name='ios-camera-outline'
              onPress={() => {}}
            />
            <EntryAction
              color='#ff80ff'
              name='ios-location-outline'
              onPress={() => {}}
            />
            <EntryAction
              color='#39ff14'
              name='ios-images-outline'
              onPress={() => {}}
            />
          </Animated.View>
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  icon: {
    marginLeft: 20,
  },
});
