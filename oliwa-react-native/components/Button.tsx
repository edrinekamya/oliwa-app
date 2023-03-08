import { memo } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import Row from './Row';
import { Text } from './Themed';

function Button({
  title,
  onPress,
  style,
  disabled,
  loading = false,
}: TouchableOpacity['props'] & { title: string; loading?: boolean }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        style,
        styles.container,
        {
          backgroundColor: loading
            ? '#00808055'
            : disabled
            ? '#00808022'
            : 'teal',
        },
      ]}>
      <Row>
        {loading ? (
          <ActivityIndicator
            style={styles.indicator}
            size={48}
            animating={loading}
            color={'#ffffff28'}
          />
        ) : (
          <Text
            style={[styles.title, { color: disabled ? '#aaaaaa33' : 'white' }]}>
            {title}
          </Text>
        )}
      </Row>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'sans-medium',
    paddingVertical: 20,
  },
  indicator: {
    paddingVertical: 8,
  },
});

export default memo(Button);
