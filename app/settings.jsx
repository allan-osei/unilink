import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3D0F7',
    paddingTop: 60,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2166A5',
    marginBottom: 24,
  },
  options: {
    width: '90%',
  },
  option: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
    alignItems: 'center',
    elevation: 1,
  },
  optionText: {
    color: '#2166A5',
    fontSize: 16,
    fontWeight: 'bold',
  },
});