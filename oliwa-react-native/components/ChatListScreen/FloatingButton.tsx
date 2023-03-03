import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Colors from '../../constants/Colors';
import useBottomTabBarPadding from '../../hooks/useBottomTabBarPadding';
import useColorScheme from '../../hooks/useColorScheme';
import { ContactListContext } from '../../screens/Modals/ContactListScreen';

export default function FloatingButton({
  scrollFraction,
}: {
  scrollFraction: Animated.SharedValue<number>;
}) {
  const ref = useContext(ContactListContext);
  const colorScheme = useColorScheme();
  const paddingBottom = useBottomTabBarPadding();
  const floatingButtonStyle = useAnimatedStyle(() => ({
    paddingHorizontal: interpolate(
      Math.max(scrollFraction.value, 0.5),
      [0.5, 1],
      [16, 32]
    ),
  }));
  return (
    <Animated.View
      style={[
        styles.container,
        { bottom: paddingBottom, backgroundColor: Colors[colorScheme].primary },
        floatingButtonStyle,
      ]}>
      <Pressable onPress={() => ref?.current?.open()}>
        <Ionicons color='#fff' name='ios-add' size={40} />
      </Pressable>
    </Animated.View>
  );
}
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    borderRadius: 32,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
