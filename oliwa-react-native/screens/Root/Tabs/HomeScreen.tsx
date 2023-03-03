import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Chip from '../../../components/Chip';
import EventList from '../../../components/HomeScreen/EventList';
import UpComingEventList from '../../../components/HomeScreen/UpComingEventList';
import useBottomTabBarPadding from '../../../hooks/useBottomTabBarPadding';
import { RootTabScreenProps } from '../../../navigation/BottomTabNavigator';

const CATEGORIES = [
  'Sports',
  'Art & Culture',
  'Religious',
  'Parties',
  'Exhibitions',
];

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const paddingBottom = useBottomTabBarPadding();
  const sections = Array(10).fill(0);
  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map((category, index) => (
          <Chip style={styles.chip} title={category} key={index} />
        ))}
      </ScrollView>
      <UpComingEventList />
      {sections.map((section, index) => (
        <EventList key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
});
