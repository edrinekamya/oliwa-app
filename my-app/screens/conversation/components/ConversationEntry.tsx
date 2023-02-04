import { Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
import { TextInput, TouchableHighlight, StyleSheet, View } from "react-native";
import IconButton from "../../../components/IconButton";
import { Row } from "../../../components/Row";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";

function ConversationEntry() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Row style={{ justifyContent: "space-around" }}>
        <IconButton name="ios-camera-outline" />
        <TextInput
          multiline
          placeholderTextColor={"#eee"}
          placeholder="Message"
          style={[
            {
              color: Colors[colorScheme].text,

              backgroundColor: Colors[colorScheme].chatBubbleRight,
            },
            styles.textInput,
          ]}
        />
        <IconButton name="ios-mic-outline" />
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 2,
    paddingTop: 20,
  },
  textInput: {
    borderRadius: 9999,
    padding: 10,
    flex: 1,
    borderWidth: 0.5,
    borderColor: "#cecece",
    fontFamily: "sans-light",
    marginHorizontal: 2,
  },
});

export default memo(ConversationEntry);
