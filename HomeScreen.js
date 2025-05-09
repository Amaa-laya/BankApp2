import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const officerName = route?.params?.officerName || 'Officer';

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, {officerName}</Text>
      <Button
        title="Scan QR Code"
        onPress={() => navigation.navigate('QRScanner')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  welcome: { fontSize: 24, marginBottom: 20 },
});
