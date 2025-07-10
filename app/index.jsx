import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* App Bar/Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/unilink-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>UniLink</Text>
      </View>

      {/* Welcome Message */}
      <Text style={styles.welcome}>Welcome back!</Text>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Example Feature Cards */}
        <TouchableOpacity style={styles.card} onPress={() => navigation && navigation.navigate('ExploreScreen')}>
          <Text style={styles.cardTitle}>Explore</Text>
          <Text style={styles.cardDesc}>Discover events, clubs, and more</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation && navigation.navigate('ProfileScreen')}>
          <Text style={styles.cardTitle}>Profile</Text>
          <Text style={styles.cardDesc}>View and edit your profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation && navigation.navigate('NotificationsScreen')}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <Text style={styles.cardDesc}>See what’s new</Text>
        </TouchableOpacity>
        {/* Add more cards as needed */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3D0F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#2166A5',
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  welcome: {
    fontSize: 20,
    color: '#2166A5',
    fontWeight: 'bold',
    marginTop: 24,
    marginLeft: 20,
    marginBottom: 12,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 24,
    marginBottom: 18,
    shadowColor: '#2166A5',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    color: '#2166A5',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: '#2166A5',
    opacity: 0.8,
  },
});