import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { auth } from '../config/firebase';

export default function QRCodeScreen() {
  const uid = auth.currentUser?.uid;

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      {uid && <QRCode value={uid} size={200} />}
    </View>
  );
}