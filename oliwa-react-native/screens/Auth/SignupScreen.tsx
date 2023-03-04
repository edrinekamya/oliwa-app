import { StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import SafeAreaView from '../../components/SafeAreaView';
import TextInput from '../../components/TextInput';
import { Text, View } from '../../components/Themed';

export default function SignupScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Heading>Tells us about you</Heading>
        <TextInput placeholder='Preferred Name' />
        <Button style={styles.button} title='Continue' />
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
});
