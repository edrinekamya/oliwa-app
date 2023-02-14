import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../navigation/BottomTabNavigator";
import ChatList from "./components/ChatList";

export default function ChatsScreen({
  navigation,
}: RootTabScreenProps<"chats">) {
  return (
    <View style={styles.container}>
      <ChatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
