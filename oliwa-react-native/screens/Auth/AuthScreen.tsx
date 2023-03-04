import { Pressable, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Row from "../../components/Row";
import { Text, View } from "../../components/Themed";


export default function AuthScreen() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Oliwa</Text>
        <Text>Create your account</Text>
        <Row>
          <Button title='Log in' />
          <Button title='Sign up' />
        </Row>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {

    }
})