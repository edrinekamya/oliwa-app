import { StyleSheet, View } from 'react-native';
import { Message } from '../../utils/types';

export default function ImageMessage({}: Pick<
  Message,
  'message' | 'forwarded'
>) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
  },
});
