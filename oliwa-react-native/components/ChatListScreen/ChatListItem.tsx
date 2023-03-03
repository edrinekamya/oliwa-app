import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Circle } from '../Circle';
import Row from '../Row';
import { Text } from '../Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

function ChatListItem({ userID }: { userID: string }) {
  const strokeWidth = Math.random() > 0.5 ? 2 : 0;
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Conversation')}>
      <Row
        style={[
          styles.container,
          { backgroundColor: Colors[colorScheme].header },
        ]}>
        <Circle strokeWidth={strokeWidth}></Circle>
        <View style={styles.contentContainer}>
          <Row style={styles.topRow}>
            <View>
              <Text>Name</Text>
              <Text style={styles.smallText}>Message</Text>
            </View>
          </Row>
        </View>
      </Row>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 25,
  },
  contentContainer: {
    paddingLeft: 10,
    flex: 1,
  },

  topRow: {
    justifyContent: 'space-between',
    paddingBottom: 8,
  },

  bottomRow: {
    justifyContent: 'space-between',
  },
  smallText: {
    color: '#aaa',
    fontFamily: 'sans-light',
    fontSize: 14,
  },
});

export default memo(ChatListItem);
