import { memo } from 'react';
import { StyleSheet } from 'react-native';
import Row from '../Row';
import UpComingEventListItem from './UpComingEventListItem';

function UpComingEventList() {
  const data = Array(6).fill(0);
  return (
    <Row style={styles.container}>
      {data.map((_, index) => (
        <UpComingEventListItem index={index} key={index} />
      ))}
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
});

export default memo(UpComingEventList);
