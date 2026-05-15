// built by Shristika Rai - May 2026

import React, { useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
export default function OTP({ navigation, route }) {
const {mobile} = route.params;
const [otp, setOtp] = useState('');

const checkOTP = () =>{
    if (otp === '123456')
navigation.navigate('Home', {mobile: mobile});
    else{
        Alert.alert('Error', 'did i forget to write 123456 as static otp?');
    }
    };

return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>Sent to {mobile}</Text>
      <View style={styles.hint}>
        <Text style={styles.hintText}>Static OTP: 123456</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="_ _ _ _ _ _"
        keyboardType="numeric"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={checkOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0C447C',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  hint: {
    backgroundColor: '#FAEEDA',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  hintText: {
    color: '#BA7517',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#0C447C',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});