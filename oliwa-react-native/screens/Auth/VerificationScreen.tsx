import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Heading from '../../components/Heading';
import SafeAreaView from '../../components/SafeAreaView';
import TextInput from '../../components/TextInput';
import { View } from '../../components/Themed';
import { verify } from '../../features/authSlice';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { RootStackScreenProps } from '../../navigation/RootNavigator';
import { isDigitString } from '../../utils/validation';

export default function VerificationScreen({
  navigation,
}: RootStackScreenProps<'Verification'>) {
  const [code, setCode] = useState('');
  const { isLoading, error } = useAppSelector(
    (state) => state.auth.verification
  );
  const dispatch = useAppDispatch();

  const onChangeText = (text: string) => {
    if (isDigitString(text) || text.length == 0) {
      setCode(text);
      if (text.length == 6) dispatch(verify(text));
    }
  };

  const submit = () => {
    dispatch(verify(code));
  };

  return (
    <SafeAreaView back={!isLoading}>
      <View style={styles.container}>
        <Heading>Verify your phone number</Heading>
        <TextInput
          autoFocus
          onChangeText={onChangeText}
          value={code}
          placeholder='XXXXXX'
          style={styles.input}
          maxLength={6}
        />
        <ErrorMessage>{error}</ErrorMessage>
        <Button
          disabled={code.length < 6}
          loading={isLoading}
          onPress={submit}
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
