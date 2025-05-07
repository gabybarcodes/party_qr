import React from 'react';
import QRCode from 'react-native-qrcode-svg';

const QRGenerator = ({ value }) => {
  return <QRCode value={value} size={200} />;
};

export default QRGenerator;