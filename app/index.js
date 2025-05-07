import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Party QR</Text>
      <Button title="Login as Client" onPress={() => router.push('/client')} />
      <Button title="Login as Bouncer" onPress={() => router.push('/bouncer')} />
    </View>
  );
}
