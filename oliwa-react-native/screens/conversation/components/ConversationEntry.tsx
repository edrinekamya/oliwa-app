import React, { memo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from '../../../components/IconButton';
import Input from '../../../components/Input';
import Row from '../../../components/Row';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';

function ConversationEntry({ open }: { open(): void }) {
  const colorScheme = useColorScheme();
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme].header },
      ]}>
      <Row>
        {!focused && (
          <IconButton onPress={open} style={styles.iconButton} name='ios-add' />
        )}
        <Input
          multiline
          placeholder='Message'
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={[
            {
              backgroundColor: Colors[colorScheme].chatBubbleRight,
            },
            styles.textInput,
          ]}
        />
        <IconButton
          style={styles.iconButton}
          size={24}
          name={focused ? 'ios-send' : 'ios-mic-outline'}
        />
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingHorizontal: 8,
  },
  textInput: {
    borderRadius: 18,
    fontSize: 16,
    marginHorizontal: 8,
  },
  iconButton: {
    marginHorizontal: 8,
  },
});

export default memo(ConversationEntry);
