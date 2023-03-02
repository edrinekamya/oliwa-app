import {
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AssistantScreen from '../screens/assistant';
import ConversationScreen from '../screens/conversation';
import MomentsScreen from '../screens/moments';
import NotificationsScreen from '../screens/notifications';
import SearchScreen from '../screens/search';
import SettingsScreen from '../screens/settings';

import React from 'react';
import { StyleSheet } from 'react-native';
import IconButton from '../components/IconButton';
import BottomTabNavigator, { RootTabParamList } from './BottomTabNavigator';
import ContactListScreen from '../screens/ContactListScreen';

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
      initialRouteName='root'
      screenOptions={({ navigation }) => ({
        headerTitleStyle: {
          fontFamily: 'sans-medium',
          marginLeft: 16,
        },
        headerStyle: {
          backgroundColor: Colors[colorScheme].header,
          borderBottomEndRadius: 25,
          borderBottomStartRadius: 25,
        },
        headerShadowVisible: false,
        headerShown: false,
        navigationBarColor: Colors[colorScheme].header,
      })}>
      <Stack.Screen name='conversation' component={ConversationScreen} />
      <Stack.Screen name='moments' component={MomentsScreen} />
      <Stack.Screen name='root' component={BottomTabNavigator} />
      <Stack.Screen name='search' component={SearchScreen} />
      <Stack.Screen name='assistant' component={AssistantScreen} />
      <Stack.Screen name='notifications' component={NotificationsScreen} />
      <Stack.Screen name='settings' component={SettingsScreen} />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  icon: {
    marginLeft: 20,
  },
});
