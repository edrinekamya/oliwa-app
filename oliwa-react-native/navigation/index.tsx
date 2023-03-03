import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { useRef } from 'react';
import { ColorSchemeName, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ContactListScreen, {
  ContactListContext,
  ContactListRef,
} from '../screens/Modals/ContactListScreen';
import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './RootNavigator';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const contactListRef = useRef<ContactListRef>(null);
  return (
    <GestureHandlerRootView style={styles.container}>
      <ContactListContext.Provider value={contactListRef}>
        <NavigationContainer
          linking={LinkingConfiguration}
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootNavigator />
          <ContactListScreen ref={contactListRef} />
        </NavigationContainer>
      </ContactListContext.Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
