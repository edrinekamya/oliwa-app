import { Ionicons } from '@expo/vector-icons';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigationProp,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Pressable } from 'react-native';
import IconButton from '../components/IconButton';
import Row from '../components/Row';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/Root/Tabs/ChatListScreen';
import HomeScreen from '../screens/Root/Tabs/HomeScreen';
import MapScreen from '../screens/Root/Tabs/MapScreen';
import { RootStackParamList } from './RootNavigator';

export type RootTabParamList = {
  Home: undefined;
  Chats: undefined;
  Map: undefined;
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

const BORDER_RADIUS = 32;

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerTitleStyle: {
          fontFamily: 'sans-heavy',
          fontSize: 24,
        },
        tabBarLabelStyle: {
          fontFamily: 'sans-medium',
          textAlignVertical: 'center',
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].header,
          borderTopWidth: 0,
          borderTopEndRadius: BORDER_RADIUS,
          borderTopStartRadius: BORDER_RADIUS,
          position: 'absolute',
        },
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors[colorScheme].header,
          borderBottomEndRadius: BORDER_RADIUS,
          borderBottomStartRadius: BORDER_RADIUS,
        },
        tabBarItemStyle: {
          marginTop: 8,
          marginBottom: 2,
        },
        tabBarButton: (props) => (
          <Pressable
            android_ripple={{
              color: Colors[colorScheme].ripple,
              borderless: true,
              radius: 48,
            }}
            {...props}
          />
        ),
      }}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'ios-home' : 'ios-home-outline'}
              color={color}
            />
          ),
          headerRight: () => (
            <Row style={styles.headerRight}>
              <IconButton
                style={styles.iconButton}
                name='ios-notifications-outline'
                onPress={() => navigation.navigate('Notifications')}
              />
              <IconButton
                name='ios-search-outline'
                style={styles.iconButton}
                onPress={() => navigation.navigate('Search')}
              />
            </Row>
          ),
        })}
      />
      <BottomTab.Screen
        name='Map'
        component={MapScreen}
        options={({ navigation }: RootTabScreenProps<'Map'>) => ({
          title: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'ios-location' : 'ios-location-outline'}
              color={color}
            />
          ),
          headerTransparent: true,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name='Chats'
        component={ChatsScreen}
        options={({ navigation }: RootTabScreenProps<'Chats'>) => ({
          title: 'Chats',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={
                focused
                  ? 'ios-chatbox-ellipses'
                  : 'ios-chatbox-ellipses-outline'
              }
              color={color}
            />
          ),
          headerRight: () => (
            <Row style={styles.headerRight}>
              <IconButton
                style={styles.iconButton}
                name='ios-search-outline'
                onPress={() => navigation.navigate('Search')}
              />
              <IconButton
                style={styles.iconButton}
                name='ios-settings-outline'
                onPress={() => navigation.navigate('Settings')}
              />
            </Row>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={24} {...props} />;
}

const styles = StyleSheet.create({
  headerRight: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
  },
  iconButton: {
    marginLeft: 32,
    marginRight: 4,
  },
});
