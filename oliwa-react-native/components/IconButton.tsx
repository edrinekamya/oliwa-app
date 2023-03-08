import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, TouchableHighlight } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function IconButton({
  name,
  size,
  ...props
}: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  size?: React.ComponentProps<typeof Ionicons>['size'];
} & TouchableHighlight['props']) {
  return (
    <Pressable
      android_ripple={{
        color: '#1da1f255',
        borderless: true,
        radius: size ?? 28,
        foreground: true,
      }}
      {...props}>
      <Ionicons
        color={props.disabled ? 'gray' : '#1da1f2'}
        size={size ?? 28}
        name={name}
      />
    </Pressable>
  );
}
