import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { auth, db } from '../config/firebase';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        checkedIn: false,
      });
      navigation.navigate('Home');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={{ marginBottom: 10 }} />
      <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry style={{ marginBottom: 10 }} />
      <Button title="Register" onPress={handleRegister} />
      <Text onPress={() => navigation.navigate('Login')}>Already have an account? Login</Text>
    </View>
  );
}
