import {
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import VerificationScreen from '../screens/Auth/VerificationScreen';
import AssistantScreen from '../screens/Root/AssistantScreen';
import ConversationScreen from '../screens/Root/ConversationScreen';
import MomentsScreen from '../screens/Root/MomentsScreen';
import NotificationsScreen from '../screens/Root/NotificationScreen';
import SearchScreen from '../screens/Root/SearchScreen';
import SettingsScreen from '../screens/Root/SettingScreen';
import BottomTabNavigator, { RootTabParamList } from './BottomTabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
const BORDER_RADIUS = 32;

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Settings: undefined;
  Assistant: undefined;
  Notifications: undefined;
  Search: undefined;
  Moments: undefined;
  Conversation: undefined;
  Login: undefined;
  Signup: undefined;
  Verification: undefined;
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
      initialRouteName='Login'
      screenOptions={({ navigation }) => ({
        headerTitleStyle: {
          fontFamily: 'sans-medium',
          marginLeft: 16,
        },
        headerStyle: {
          backgroundColor: Colors[colorScheme].header,
          borderBottomEndRadius: BORDER_RADIUS,
          borderBottomStartRadius: BORDER_RADIUS,
        },
        headerShadowVisible: false,
        headerShown: false,
        navigationBarColor: Colors[colorScheme].header,
      })}>
      <Stack.Group
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Verification' component={VerificationScreen} />
        <Stack.Screen name='Signup' component={SignupScreen} />
      </Stack.Group>
      <Stack.Screen name='Conversation' component={ConversationScreen} />
      <Stack.Screen name='Moments' component={MomentsScreen} />
      <Stack.Screen name='Root' component={BottomTabNavigator} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='Assistant' component={AssistantScreen} />
      <Stack.Screen name='Notifications' component={NotificationsScreen} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  );
}
