// built by Shristika Rai - May 2026

import React, {useState} from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

export default function Incident() {
  const [incidentType, setIncidentType] = useState('');
  const [inDetails, setInDetails] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [incidents, setIncidents] = useState([]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Please allow photo access');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.7,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    const loc = await Location.getCurrentPositionAsync({});
    setLocation({
      lat: loc.coords.latitude.toFixed(5),
      lng: loc.coords.longitude.toFixed(5),
    });
  };

  const submitReport = async () => {
    if (!incidentType) {
      Alert.alert('Error', 'Please select an incident type');
      return;
    }
    if (!inDetails) {
      Alert.alert('Error', 'Please add a description');
      return;
    }
    await getLocation();
    const newIncident = {
      id: Date.now(),
      type: incidentType,
      details: inDetails,
      image: image ? 'Image attached' : 'No image',
      time: new Date().toLocaleString(),
    };
    setIncidents([newIncident, ...incidents]);
    setIncidentType('');
    setInDetails('');
    setImage(null);
    Alert.alert('Success', 'Incident reported!');
  };

  const types = ['Theft', 'Accident', 'Medical', 'Fire', 'Other'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Report Incident</Text>
      <Text style={styles.subtitle}>Describe what happened</Text>

      <Text style={styles.label}>Incident Type</Text>
      <View style={styles.typeRow}>
        {types.map(t => (
          <TouchableOpacity
            key={t}
            style={[styles.typeBtn, incidentType === t && styles.typeBtnActive]}
            onPress={() => setIncidentType(t)}>
            <Text style={[styles.typeBtnText, incidentType === t && styles.typeBtnTextActive]}>
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe what happened..."
        value={inDetails}
        onChangeText={setInDetails}
        multiline={true}
      />

      <TouchableOpacity style={styles.imageBtn} onPress={pickImage}>
        <Text style={styles.imageBtnText}>
          {image ? '✅ Image Selected' : '📷 Pick Image (Optional)'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={submitReport}>
        <Text style={styles.buttonText}>Submit Report</Text>
      </TouchableOpacity>

      {incidents.length > 0 && (
        <View style={styles.historyCard}>
          <Text style={styles.historyTitle}>Submitted Reports</Text>
          {incidents.map(inc => (
            <View key={inc.id} style={styles.incidentItem}>
              <Text style={styles.incidentType}>{inc.type}</Text>
              <Text style={styles.incidentTime}>{inc.time}</Text>
              <Text style={styles.incidentDesc}>{inc.details}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  typeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
  },
  typeBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  typeBtnActive: {
    backgroundColor: '#0C447C',
    borderColor: '#0C447C',
  },
  typeBtnText: {
    fontSize: 13,
    color: '#555',
  },
  typeBtnTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 18,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  imageBtn: {
    backgroundColor: '#F1EFE8',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 14,
  },
  imageBtnText: {
    fontSize: 14,
    color: '#5F5E5A',
  },
  button: {
    backgroundColor: '#0C447C',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C447C',
    marginBottom: 12,
  },
  incidentItem: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
    marginTop: 12,
  },
  incidentType: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#BA7517',
  },
  incidentTime: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  incidentDesc: {
    fontSize: 13,
    color: '#333',
    marginTop: 4,
  },
});