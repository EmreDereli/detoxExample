/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (mail === 'john@example.com' && password === '123456') {
      setShow(true);
    }
  };

  return (
    <View style={styles.container}>
      {show ? <Text testID="Welcome">Welcome</Text> : null}
      <TextInput
        testID="email_input"
        placeholder="E-Mail"
        onChangeText={(val) => setMail(val)}
        style={styles.inputStyle}></TextInput>
      <TextInput
        testID="password_input"
        placeholder="Password"
        secureTextEntry
        onChangeText={(val) => setPassword(val)}
        style={styles.inputStyle}></TextInput>
      <TouchableOpacity
        style={styles.loginButton}
        testID="login_button"
        onPress={() => handleLogin()}>
        <Text style={styles.loginBtnTextStyle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    padding: 15,
    backgroundColor: '#000',
  },
  loginBtnTextStyle: {
    color: '#ffffff',
  },
  inputStyle: {
    borderWidth: 0.5,
    width: 300,
    padding: 10,
    margin: 10,
  },
});

export default App;
