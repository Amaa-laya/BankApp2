import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function DepositScreen({ route, navigation }) {
  const { userData } = route.params;
  const [amount, setAmount] = useState('');

  const handleDeposit = async () => {
    if (amount.trim()) {
      await addDoc(collection(db, 'transactions'), {
        userId: userData.id,
        name: userData.name,
        amount: parseFloat(amount),
        timestamp: serverTimestamp(),
      });
      navigation.navigate('Dashboard', { userData, amount });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Name: {userData.name}</Text>
      <Text>ID: {userData.id}</Text>
      <TextInput
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />
      <Button title="Deposit" onPress={handleDeposit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 10, marginVertical: 20 },
});
