import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../../../components/IconButton";
import Input from "../../../components/Input";
import Row from "../../../components/Row";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";

function ConversationEntry() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Row>
        <IconButton style={styles.iconButton} name="ios-camera-outline" />
        <Input
          multiline
          placeholder="Message"
          style={[
            {
              backgroundColor: Colors[colorScheme].chatBubbleRight,
            },
            styles.textInput,
          ]}
        />
        <IconButton style={styles.iconButton} name="ios-mic-outline" />
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  textInput: {
    borderRadius: 18,
  },
  iconButton: {
    marginHorizontal: 8,
  },
});

export default memo(ConversationEntry);
