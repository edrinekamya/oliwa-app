import { memo } from 'react';
import { Pressable, StyleSheet, TouchableHighlight } from 'react-native';
import CountryData from '../../utils/CountryData';
import Row from '../Row';
import { Text } from '../Themed';

export type CountryListRef = {
  toggle(): void;
};

export type Country = {
  name: string;
  flag: string;
  code: string;
};

export type CountryListProps = {
  onSelect(country: Country): void;
};

export default memo(function CountryList({ onSelect }: CountryListProps) {
  return (
    <>
      {CountryData.map((country, i) => (
        <TouchableHighlight
          key={i}
          underlayColor={'#1da8b211'}
          onPress={() => onSelect(country)}>
          <Row style={styles.row}>
            <Text style={styles.flag}>{country.flag}</Text>
            <Text>{country.name}</Text>
          </Row>
        </TouchableHighlight>
      ))}
    </>
  );
});

const styles = StyleSheet.create({
  flag: { marginRight: 16, fontSize: 32 },
  row: {
    padding: 16,
  },
});
