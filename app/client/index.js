import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function ClientHome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Client Dashboard</Text>
      <Button title="Show My QR Code" onPress={() => router.push('/client/QRCodeScreen')} />
    </View>
  );
}
