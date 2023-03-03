import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { memo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import IconButton from '../IconButton';
import Menu, { MenuRefProps } from '../Menu';
import Row from '../Row';
import { Text } from '../Themed';

function ConversationHeader() {
  const navigation = useNavigation();
  const menu = useRef<MenuRefProps>(null);

  return (
    <Row style={styles.container}>
      <IconButton onPress={navigation.goBack} name='chevron-back' />
      <Text numberOfLines={1} style={styles.title}>
        Name
      </Text>

      <Menu ref={menu} />
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 4,
    paddingTop: Constants.statusBarHeight + 4,
  },
  avatar: {},
  headerTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textTransform: 'capitalize',
    fontFamily: 'sans-medium',
    fontSize: 16,
  },
  icon: {
    marginLeft: 5,
  },
});

export default memo(ConversationHeader);
