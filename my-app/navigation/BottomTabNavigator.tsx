import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigationProp,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableHighlight, StyleSheet } from "react-native";
import { IconButton } from "../components/HeaderIcon";
import { Row } from "../components/Row";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatsScreen from "../screens/chats";
import HomeScreen from "../screens/home";
import MapScreen from "../screens/map";
import { RootStackParamList } from "./RootNavigator";

export type RootTabParamList = {
  home: undefined;
  chats: undefined;
  map: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type RootTabNavigationProp<Screen extends keyof RootTabParamList> =
  CompositeNavigationProp<
    NavigationProp<RootTabParamList, Screen>,
    NavigationProp<RootStackParamList>
  >;

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerTitleStyle: {
          fontFamily: "sans-heavy",
        },
        tabBarLabelStyle: {
          fontFamily: "sans-medium",
          textAlignVertical: "center",
          paddingBottom: 8,
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tabBarBackground,
          position: "absolute",
          borderTopWidth: 0,
          height: 64,
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
        },
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "transparent",
          borderBottomEndRadius: 25,
          borderBottomStartRadius: 25,
        },
      }}
    >
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home-outline" color={color} />
          ),
          headerRight: () => (
            <Row style={styles.headerRight}>
              <IconButton
                name="ios-search-outline"
                color={Colors[colorScheme].text}
                onPress={() => navigation.navigate("search")}
              />
              <IconButton
                color={Colors[colorScheme].text}
                name="ios-settings-outline"
                onPress={() => navigation.navigate("settings")}
              />
            </Row>
          ),
        })}
      />
      <BottomTab.Screen
        name="map"
        component={MapScreen}
        options={({ navigation }: RootTabScreenProps<"map">) => ({
          title: "Discover",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-location-outline" color={color} />
          ),
          headerTransparent: true,
        })}
      />
      <BottomTab.Screen
        name="chats"
        component={ChatsScreen}
        options={({ navigation }: RootTabScreenProps<"chats">) => ({
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-chatbox-ellipses-outline" color={color} />
          ),
          headerRight: () => (
            <Row style={styles.headerRight}>
              <IconButton
                name="ios-search-outline"
                color={Colors[colorScheme].text}
                onPress={() => navigation.navigate("search")}
              />
              <IconButton
                color={Colors[colorScheme].text}
                name="ios-settings-outline"
                onPress={() => navigation.navigate("settings")}
              />
            </Row>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons style={{ marginBottom: -8 }} size={30} {...props} />;
}

const styles = StyleSheet.create({
  headerRight: {
    backgroundColor: "transparent",
  },
});
