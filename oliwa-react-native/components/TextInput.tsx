import React, { useState } from 'react';
import { StyleSheet, TextInput as Input, TextInputProps } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const BLUR_STATE = { borderWidth: 1, borderColor: 'gray' };
const FOCUS_STATE = { borderWidth: 2, borderColor: 'teal' };

export default function TextInput({ style, ...props }: TextInputProps) {
  const colorScheme = useColorScheme();
  const [state, setState] = useState(BLUR_STATE);

  return (
    <Input
      onFocus={() => setState(FOCUS_STATE)}
      onBlur={() => setState(BLUR_STATE)}
      placeholderTextColor={'gray'}
      style={[
        styles.container,
        style,
        state,
        { color: Colors[colorScheme].text },
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    fontFamily: 'sans-medium',
    borderRadius: 8,
    fontSize: 16,
  },
});
