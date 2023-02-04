import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { IconButton } from "../../components/HeaderIcon";
import { Row } from "../../components/Row";
import { Text, View } from "../../components/Themed";
import useColorScheme from "../../hooks/useColorScheme";
import { RootStackScreenProps } from "../../navigation/RootNavigator";

export default function SearchScreen({
  navigation,
}: RootStackScreenProps<"search">) {
  const colorScheme = useColorScheme();
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const backgroundColor = isFocused
    ? Colors["light"].searchBar
    : Colors[colorScheme].searchBar;
  const borderRadius = isFocused ? 9999 : 10;
  const iconColor = Colors[colorScheme].primary;

  return (
    <View style={styles.container}>
      {!isFocused && <Text>Search</Text>}
      <Row style={[styles.searchBar, { backgroundColor, borderRadius }]}>
        {isFocused ? (
          <Ionicons color={iconColor} size={30} name="search-outline" />
        ) : (
          <Ionicons
            color={iconColor}
            size={30}
            onPress={() => setIsFocused(false)}
            name="chevron-back"
          />
        )}
        <TextInput
          onChangeText={setSearchText}
          value={searchText}
          onBlur={() => {}}
          onFocus={() => {
            setIsFocused(true);
          }}
          placeholderTextColor="lightGray"
          placeholder="What do you want to search for?"
          style={[{}, styles.textInput]}
        />
        {searchText.length && (
          <IconButton
            name="close-circle-outline"
            onPress={() => setSearchText("")}
          />
        )}
      </Row>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: "sans-medium",
    fontSize: 13,
  },
  searchBar: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ddd",
  },
});
