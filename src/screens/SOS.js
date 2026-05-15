// built by Shristika Rai - May 2026

import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
export default function SOS (){

const [sosEvents, setSosEvents] = useState([]);

const sosButton = () => {
    Alert.alert(
      'Send SOS Alert?',
      'This will send an emergency alert.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'SEND SOS',
          style: 'destructive',
          onPress: () => {
            const newEvent = {
              id: Date.now(),
              time: new Date().toLocaleString(),
            };
            setSosEvents([newEvent, ...sosEvents]);
            Alert.alert('SOS Sent!', 'Help is on the way.');
          },
        },
      ]
    );
}


return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sosButton} onPress={sosButton}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
      <Text style={styles.hint}>Tap in an emergency</Text>

      {sosEvents.length > 0 && (
        <View style={styles.historyCard}>
          <Text style={styles.historyTitle}>SOS History</Text>
          {sosEvents.map(event => (
            <View key={event.id} style={styles.eventItem}>
              <Text style={styles.eventLabel}>🆘 SOS Triggered</Text>
              <Text style={styles.eventTime}>{event.time}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  sosButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#E24B4A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#fff',
    elevation: 10,
  },
  sosText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 3,
  },
  hint: {
    fontSize: 13,
    color: '#888',
    marginBottom: 40,
  },
  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C447C',
    marginBottom: 12,
  },
  eventItem: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
    marginTop: 10,
  },
  eventLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E24B4A',
  },
  eventTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
});