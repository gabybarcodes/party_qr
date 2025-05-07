import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { auth } from '../config/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={{ marginBottom: 10 }} />
      <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry style={{ marginBottom: 10 }} />
      <Button title="Login" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('Register')}>No account? Register</Text>
    </View>
  );
}
