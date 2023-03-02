import { useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconButton from './IconButton';
import Row from './Row';
import { Text, View } from './Themed';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export default function SafeAreaView({
  children,
  headerRight,
  headerTitle,
}: {
  children?: any;
  headerRight?: ReactNode;
  headerTitle?: string;
}) {
  const { top, bottom, left, right } = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={[
        {
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
        },
        styles.container,
      ]}>
      <Row
        style={[
          {
            paddingTop: top + 8,
            backgroundColor: Colors[colorScheme].header,
          },
          styles.header,
        ]}>
        <IconButton onPress={navigation.goBack} name='chevron-back' />
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        {headerRight}
      </Row>
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'space-between', flex: 1 },
  header: {
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  headerTitle: { flex: 1 },
});
