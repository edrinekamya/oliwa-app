import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import SafeAreaView from '../../components/SafeAreaView';
import TextInput from '../../components/TextInput';
import { View } from '../../components/Themed';
import { RootStackScreenProps } from '../../navigation/RootNavigator';

export default function VerificationScreen({
  navigation,
}: RootStackScreenProps<'Verification'>) {
  const [code, setCode] = useState('');

  return (
    <SafeAreaView back>
      <View style={styles.container}>
        <Heading>Verify your phone number</Heading>
        <TextInput
          autoFocus
          onChangeText={setCode}
          value={code}
          placeholder='XXXXXX'
          style={styles.input}
          maxLength={6}
        />
        <Button
          onPress={() => navigation.navigate('Signup')}
          style={styles.button}
          title='Verify'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  button: {
    marginVertical: 16,
  },
  input: {
    textAlign: 'center',
  },
});
