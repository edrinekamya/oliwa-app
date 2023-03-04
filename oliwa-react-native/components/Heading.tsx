import { StyleSheet, TextProps } from 'react-native';
import { Text } from './Themed';

export default function Heading(props: TextProps) {
  return <Text style={styles.heading} {...props} />;
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'sans-heavy',
    fontSize: 22,
    paddingVertical: 16,
    alignSelf: 'center',
  },
});
