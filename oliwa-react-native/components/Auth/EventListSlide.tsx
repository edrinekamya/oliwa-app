import { memo } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { handleEventSelect } from '../../features/authSlice';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { Text } from '../Themed';

const eventList = [
  'Comedy shows',
  'Live band performances',
  'Theater plays',
  'Cultural dance performances',
  'Art exhibitions',
  'Fashion shows',
  'Food festivals',
  'Wine and cheese tastings',
  'Film screenings',
  'Poetry slams',
  'Open mic nights',
  'Stand-up comedy competitions',
  'Karaoke nights',
  'DJ battles',
  'Hip hop concerts',
  'Reggae concerts',
  'Jazz concerts',
  'Blues concerts',
  'Country music concerts',
  'Gospel music concerts',
  'Music festivals',
  'Carnivals',
  'Fairs',
  'Circus performances',
  'Magic shows',
  'Fireworks displays',
  'Acrobatics shows',
  'Rodeos',
  'Monster truck rallies',
  'Motorcycle races',
  'Boat races',
  'Car races',
  'Air shows',
  'Parades',
  'Talent shows',
  'Drama competitions',
  'Beauty pageants',
  'Bodybuilding competitions',
  'Mixed martial arts competitions',
  'Boxing matches',
];

const EventItem = memo(({ event }: { event: string }) => {
  const dispatch = useAppDispatch();

  const selected = useAppSelector((state) =>
    state.auth.signup.config.events.includes(event)
  );

  const select = () => dispatch(handleEventSelect(event));

  return (
    <TouchableOpacity
      onPress={select}
      style={[styles.item, { backgroundColor: selected ? 'blue' : 'gray' }]}>
      <Text>{event}</Text>
    </TouchableOpacity>
  );
});

export default memo(function EventListSlide() {
  const renderItem = ({ item }: { item: string }) => <EventItem event={item} />;

  return <FlatList data={eventList} renderItem={renderItem} numColumns={2} />;
});

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 25,
  },
});
