import { StyleSheet, Text, TextProps } from 'react-native';

export default function ErrorMessage(props: TextProps) {
  return (
    <Text
      style={{
        color: 'red',
        marginVertical: props.children ? 8 : 0,
      }}
      {...props}
    />
  );
}
