import React from 'react';
import { Button, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Button title="My QR Code" onPress={() => navigation.navigate('My QR')} />
      <Button title="Scan Guest QR" onPress={() => navigation.navigate('Scan QR')} />
    </View>
  );
}