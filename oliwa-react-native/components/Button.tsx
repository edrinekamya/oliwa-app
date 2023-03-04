import { memo } from 'react';
import { StyleSheet, TouchableOpacity, ViewProps } from 'react-native';
import { Text } from './Themed';

function Button({
  title,
  onPress,
  style,
}: Pick<ViewProps, 'style'> & { title: string; onPress?: () => void }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[style, styles.container]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'teal',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'sans-medium',
    color: '#fff',
  },
});

export default memo(Button);
