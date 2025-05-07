import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function BouncerHome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bouncer Dashboard</Text>
      <Button title="Scan QR Code" onPress={() => router.push('/bouncer/ScannerScreen')} />
    </View>
  );
}
