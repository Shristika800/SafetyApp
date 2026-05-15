// built by Shristika Rai - May 2026


import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home({navigation, route}) {
    const {mobile} = route.params;
return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Welcome 👋</Text>
        <Text style={styles.bannerSub}>{mobile}</Text>
      </View>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SOS')}>
        <Text style={styles.cardIcon}>🆘</Text>
        <Text style={styles.cardTitle}>SOS Alert</Text>
        <Text style={styles.cardSub}>Send emergency alert</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Location')}>
        <Text style={styles.cardIcon}>📍</Text>
        <Text style={styles.cardTitle}>GPS Location</Text>
        <Text style={styles.cardSub}>View your coordinates</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Incident')}>
        <Text style={styles.cardIcon}>📋</Text>
        <Text style={styles.cardTitle}>Report Incident</Text>
        <Text style={styles.cardSub}>Log an incident</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    backgroundColor: '#0C447C',
    borderRadius: 14,
    padding: 20,
    marginBottom: 24,
    marginTop: 10,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerSub: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#eee',
  },
  cardIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  cardSub: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
});