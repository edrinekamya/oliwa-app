import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import { RootTabScreenProps } from '../../navigation/BottomTabNavigator';
import { RootStackScreenProps } from '../../navigation/RootNavigator';

export default function NotificationsScreen({
  navigation,
}: RootStackScreenProps<'Notifications'>) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
