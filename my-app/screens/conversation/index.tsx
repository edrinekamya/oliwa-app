import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { RootStackScreenProps } from "../../navigation/RootNavigator";
import ChatBubble, {
  sampleMessage,
  sampleMessage1,
  sampleMessage2,
  sampleMessage3,
} from "./components/ChatBubble";
import ConversationEntry from "./components/ConversationEntry";
import ConversationHeader from "./components/ConversationHeader";

export default function ConversationScreen({
  navigation,
}: RootStackScreenProps<"conversation">) {
  return (
    <View style={styles.container}>
      <ConversationHeader />
      <ChatBubble message={sampleMessage} />

      <ChatBubble isLeft message={sampleMessage1} />

      <ChatBubble message={sampleMessage2} />

      <ChatBubble isLeft message={sampleMessage3} />
      <ConversationEntry />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: "space-between",
  },
});
