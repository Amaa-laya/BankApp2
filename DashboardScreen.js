import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen({ route }) {
  const { userData, amount } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Deposit Successful!</Text>
      <Text>Name: {userData.name}</Text>
      <Text>ID: {userData.id}</Text>
      <Text>Amount Deposited: Rs. {amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
