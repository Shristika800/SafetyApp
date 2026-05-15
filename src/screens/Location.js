// built by Shristika Rai - May 2026

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function LocationScreen({navigation}){
    const [latitude, setLatitude]= useState(null);
    const [longitude, setLongitude]= useState(null);
    const [loading, setLoading]= useState(false);


const getLocation = async () => {
    setLoading(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
if (status !== 'granted') {
        Alert.alert('Permission Denied', 'location access required');
   setLoading(false);
return;

}
const loc = await Location.getCurrentPositionAsync({});
setLatitude(loc.coords.latitude.toFixed(6));
setLongitude(loc.coords.longitude.toFixed(6));
setLoading(false);
}

return (
    <View style={styles.container}>
      <Text style={styles.title}>GPS Location</Text>
      <Text style={styles.subtitle}>Your current coordinates</Text>

      {latitude && (
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>🌐 Latitude</Text>
            <Text style={styles.rowValue}>{latitude}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>🌐 Longitude</Text>
            <Text style={styles.rowValue}>{longitude}</Text>
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>
          {loading ? 'Fetching...' : latitude ? 'Refresh Location' : 'Get My Location'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0C447C',
    marginBottom: 6,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#0C447C',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },
  row: {
    backgroundColor: '#E6F1FB',
    borderRadius: 9,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLabel: {
    fontSize: 13,
    color: '#666',
  },
  rowValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0C447C',
  },
});