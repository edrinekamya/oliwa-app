import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../navigation/BottomTabNavigator';
import { RootStackScreenProps } from '../../navigation/RootNavigator';

export default function AssistantScreen({
  navigation,
}: RootStackScreenProps<'Moments'>) {
  return (
    <View style={styles.container}>
      <Text>Assistant Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
