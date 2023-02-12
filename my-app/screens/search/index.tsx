import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
import IconButton from "../../components/IconButton";
import Row from "../../components/Row";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { RootStackScreenProps } from "../../navigation/RootNavigator";
import Constants from "expo-constants";
import { set } from "react-native-reanimated";

export default function SearchScreen({
  navigation,
}: RootStackScreenProps<"search">) {
  const colorScheme = useColorScheme();
  const [isFocused, setIsFocused] = useState(true);
  const [searchText, setSearchText] = useState("");
  const color = Colors[colorScheme].text;

  return (
    <View style={styles.container}>
      {isFocused ? (
        <Row style={styles.focusedSearchBar}>
          <IconButton
            onPress={() => setIsFocused(false)}
            name="arrow-back"
            size={24}
          />
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            autoFocus
            placeholderTextColor={"#aaa"}
            placeholder="What do you want to search for?"
            style={[styles.textInput, { color }]}
          />
          {searchText.length ? (
            <IconButton
              style={styles.closeCircle}
              name="ios-close"
              size={20}
              onPress={() => setSearchText("")}
            />
          ) : null}
        </Row>
      ) : (
        <Pressable onPressIn={() => setIsFocused(true)}>
          <Row style={styles.searchBar}>
            <IconButton name="ios-search-outline" />
            <Text style={styles.placeholder}>Search</Text>
          </Row>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: Constants.statusBarHeight + 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: "sans-light",
    fontSize: 16,
  },
  searchBar: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ddd",
  },
  closeCircle: {
    marginHorizontal: 8,
  },
  placeholder: {
    fontSize: 18,
  },
  focusedSearchBar: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#eee",
    paddingBottom: 4,
  },
});
