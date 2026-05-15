// built by Shristika Rai - May 2026

import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
export default function ({navigation}){
const [mobile, setMobile] = useState('');
const [password, setPassword]= useState('');

const handleRegister = () => {
    if (!/^[0-9]{10}$/.test(mobile)){
Alert.alert('please enter a 10 digit mobile number');
return;
    }

if (password.length < 6){
Alert.alert('password must be at least 6 characters long');
return;
}

Alert.alert('Success', 'Account created! please login.');
navigation.navigate('Login');
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>Create Account</Text>
    <Text style={styles.subtitle}>Register with your mobile number</Text>

    <TextInput
      style={styles.input}
      placeholder="Mobile Number"
      keyboardType="numeric"
      maxLength={10}
      value={mobile}
      onChangeText={setMobile}
    />

    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}
    />

    <TouchableOpacity style={styles.button} onPress={handleRegister}>
      <Text style={styles.buttonText}>Get OTP</Text>
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
    marginBottom: 28,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#0C447C',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});