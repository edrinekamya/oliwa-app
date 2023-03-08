import { Ionicons } from '@expo/vector-icons';
import { AsYouType } from 'libphonenumber-js';
import { useCallback, useEffect, useState } from 'react';
import { Dimensions, Pressable, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import CountryList, { Country } from '../../components/Auth/CountryList';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Heading from '../../components/Heading';
import Row from '../../components/Row';
import SafeAreaView from '../../components/SafeAreaView';
import TextInput from '../../components/TextInput';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { login } from '../../features/authSlice';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useColorScheme from '../../hooks/useColorScheme';
import { RootStackScreenProps } from '../../navigation/RootNavigator';
import { isPhoneString, isPhoneValid } from '../../utils/validation';

const { height: HEIGHT } = Dimensions.get('window');

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<'Login'>) {
  const translateY = useSharedValue(HEIGHT);
  const colorScheme = useColorScheme();
  const { isLoading, config } = useAppSelector((state) => state.auth.login);
  const error = useAppSelector((state) => state.auth.loginError);
  console.log('error', error);
  const [country, setCountry] = useState<Country>(config.country);
  const [phoneNumber, setPhoneNumber] = useState(config.phoneNumber);
  const isNumberValid = isPhoneValid(phoneNumber);
  const dispatch = useAppDispatch();

  const contactListAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const toggle = () => {
    translateY.value = withTiming(translateY.value == 0 ? HEIGHT : 0);
  };

  const onChangeText = (text: string) => {
    if (isPhoneString(text) && text.length >= country.code.length) {
      setPhoneNumber(new AsYouType().input(text));
    }
  };

  const submit = () => {
    dispatch(
      login({
        phoneNumber,
        country,
      })
    );
  };

  const onSelect = useCallback((c: Country) => {
    setCountry(c);
    setPhoneNumber(c.code);
    toggle();
  }, []);

  useEffect(() => {
    if (error === null) {
      navigation.navigate('Verification');
    }
  }, [error]);

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
            onChangeText={onChangeText}
            value={phoneNumber}
            placeholder='+1 XXXXXXXXXX'
          />
        </Row>
        <ErrorMessage>{error}</ErrorMessage>
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
        <Button
          disabled={!isNumberValid}
          onPress={submit}
          loading={isLoading}
          style={styles.button}
          title='Continue'
        />
        <Text style={styles.info}>
          By clicking "Continue", you agree to our Terms and confirm you're 18
          years or older.
        </Text>
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
