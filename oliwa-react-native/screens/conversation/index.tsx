import { Ionicons } from "@expo/vector-icons";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { Row } from "../../components/Row";
import { View, Text } from "../../components/Themed";
import { RootStackScreenProps } from "../../navigation/RootNavigator";
import ChatBubble, {
  sampleMessage,
  sampleMessage1,
  sampleMessage2,
} from "./components/ChatBubble";
import ConversationEntry from "./components/ConversationEntry";
import ConversationHeader from "./components/ConversationHeader";
import { Message } from "./types";

export default function ConversationScreen({
  navigation,
}: RootStackScreenProps<"conversation">) {
  const data = Array(50)
    .fill(0)
    .map(() =>
      Math.random() < 0.2
        ? sampleMessage2
        : Math.random() > 0.4
        ? sampleMessage
        : sampleMessage1
    );
  const renderItem = ({ item, index }: { item: Message; index: number }) => (
    <ChatBubble message={item} isLeft={index % 2 == 0} />
  );
  return (
    <View style={styles.container}>
      <ConversationHeader />
      <FlatList data={data} renderItem={renderItem} />
      <ConversationEntry />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
