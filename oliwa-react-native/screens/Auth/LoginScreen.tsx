import { Ionicons } from '@expo/vector-icons';
import { useCallback, useMemo, useState } from 'react';
import { Dimensions, Pressable, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Row from '../../components/Row';
import SafeAreaView from '../../components/SafeAreaView';
import TextInput from '../../components/TextInput';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import CountryData from '../../utils/CountryData';
import CountryList, { Country } from '../../components/Auth/CountryList';
import { RootStackScreenProps } from '../../navigation/RootNavigator';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<'Login'>) {
  const translateY = useSharedValue(HEIGHT);
  const colorScheme = useColorScheme();
  const [country, setCountry] = useState<Country>(CountryData[0]);
  const [number, setNumber] = useState(country.code);

  const contactListAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const toggle = () => {
    translateY.value = withTiming(translateY.value == 0 ? HEIGHT : 0);
  };

  const submit = () => {
    navigation.navigate('Verification');
  };

  const onSelect = useCallback((c: Country) => {
    setCountry(c);
    setNumber(c.code);
    toggle();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Heading>Enter your phone number</Heading>
        <Row>
          <Pressable onPress={toggle}>
            <Row style={styles.flagContainer}>
              <Text style={styles.flag}>{country.flag}</Text>
              <Ionicons size={26} color='gray' name='chevron-down-outline' />
            </Row>
          </Pressable>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            placeholder='+1 XXXXXXXXXX'
          />
        </Row>
        <View style={styles.countryListContainer}>
          <Animated.View
            style={[
              [
                styles.countryList,
                { backgroundColor: Colors[colorScheme].header },
              ],
              contactListAnimatedStyle,
            ]}>
            <ScrollView>
              <CountryList onSelect={onSelect} />
            </ScrollView>
          </Animated.View>
        </View>
        <Button onPress={submit} style={styles.button} title='Continue' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  info: {
    fontFamily: 'sans-light',
    color: 'gray',
  },
  button: {
    marginVertical: 16,
  },
  input: {
    flex: 1,
  },
  flagContainer: {
    marginRight: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  countryList: {
    position: 'absolute',
    borderRadius: 8,
    left: 0,
    right: 0,
    top: 8,
    zIndex: 2,
    height: 500,
    borderWidth: 1,
    borderColor: 'gray',
    elevation: 2,
  },
  countryListContainer: {
    zIndex: 1,
  },
  flag: {
    fontSize: 32,
    marginRight: 8,
    marginVertical: 11,
  },
});
