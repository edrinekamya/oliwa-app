import { useNavigation } from "@react-navigation/native";
import { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Circle } from "../../../components/Circle";
import Row from "../../../components/Row";
import { Text, View } from "../../../components/Themed";

function ChatListItem({ userID }: { userID: string }) {
  const strokeWidth = Math.random() > 0.5 ? 2 : 0;
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("conversation")}>
      <Row style={styles.container}>
        <Circle strokeWidth={strokeWidth}></Circle>
        <View style={styles.contentContainer}>
          <Row style={styles.topRow}>
            <Text>Name</Text>
            <Text style={styles.smallText}>11:15</Text>
          </Row>
          <Row style={styles.bottomRow}>
            <Text style={styles.smallText}>Message</Text>
          </Row>
        </View>
      </Row>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  contentContainer: {
    paddingLeft: 10,
    flex: 1,
  },

  topRow: {
    justifyContent: "space-between",
    paddingBottom: 8,
  },

  bottomRow: {
    justifyContent: "space-between",
  },
  smallText: {
    color: "#aaa",
    fontFamily: "sans-light",
    fontSize: 14,
  },
});

export default memo(ChatListItem);
