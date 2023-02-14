import {
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import AssistantScreen from "../screens/assistant";
import ConversationScreen from "../screens/conversation";
import MomentsScreen from "../screens/moments";
import NotificationsScreen from "../screens/notifications";
import SearchScreen from "../screens/search";
import SettingsScreen from "../screens/settings";

import BottomTabNavigator, { RootTabParamList } from "./BottomTabNavigator";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  root: NavigatorScreenParams<RootTabParamList> | undefined;
  settings: undefined;
  assistant: undefined;
  notifications: undefined;
  search: undefined;
  moments: undefined;
  conversation: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
export type RootStackNavigationProp<Screen extends keyof RootStackParamList> =
  NavigationProp<RootStackParamList, Screen>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      initialRouteName="root"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "sans-medium",
        },
        headerStyle: {
          backgroundColor: Colors[colorScheme].background,
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="conversation" component={ConversationScreen} />
        <Stack.Screen name="moments" component={MomentsScreen} />
        <Stack.Screen name="root" component={BottomTabNavigator} />
        <Stack.Screen name="search" component={SearchScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="assistant" component={AssistantScreen} />
        <Stack.Screen name="notifications" component={NotificationsScreen} />
        <Stack.Screen name="settings" component={SettingsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
