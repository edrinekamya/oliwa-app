import { FlatList, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { RootStackScreenProps } from "../../navigation/RootNavigator";
import ConversationEntry from "./components/ConversationEntry";
import ConversationHeader from "./components/ConversationHeader";
import MessageGroupItem from "./components/MessageGroupItem";
import { MessageGroup, messageGroups } from "./types";

export default function ConversationScreen({
  navigation,
}: RootStackScreenProps<"conversation">) {
  const renderItem = ({
    item,
    index,
  }: {
    item: MessageGroup;
    index: number;
  }) => (
    <MessageGroupItem
      messageGroup={item}
      isLeft={index % 2 == 0}
      isFirstToday={Math.random() < 0.1}
    />
  );
  return (
    <View style={styles.container}>
      <ConversationHeader />
      <FlatList inverted data={messageGroups} renderItem={renderItem} />
      <ConversationEntry />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
});
