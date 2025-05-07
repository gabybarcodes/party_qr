import { Camera } from "expo-camera";
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { db } from '../config/firebase';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    if (scanned) return;

    setScanned(true);
    const docRef = doc(db, 'users', data);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const user = docSnap.data();
      if (user.checkedIn) {
        Alert.alert('Already checked in');
      } else {
        await updateDoc(docRef, { checkedIn: true });
        Alert.alert('Guest checked in');
      }
    } else {
      Alert.alert('Invalid QR code');
    }
    setTimeout(() => setScanned(false), 2000);
  };

  if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
    </View>
  );
}
