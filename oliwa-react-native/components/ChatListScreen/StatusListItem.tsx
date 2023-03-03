import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Circle } from '../Circle';
import { View, Text } from '../Themed';

function StatusListItem({ userID }: { userID: string }) {
  const navigation = useNavigation();
  const strokeWidth = Math.random() > 0.5 ? 2 : 0;
  return (
    <View style={{ alignItems: 'center', margin: 16 }}>
      <Circle
        onPress={() => navigation.navigate('moments')}
        strokeWidth={strokeWidth}
        strokeColor='green'></Circle>
      <Text style={{ marginTop: 10 }}>Name</Text>
    </View>
  );
}

export default memo(StatusListItem);
