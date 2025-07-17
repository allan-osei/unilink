import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const mockNotifications = [
  {
    id: 1,
    title: 'Event Reminder',
    description: 'Don’t forget the Science Club meeting today at 5pm!',
    time: '2h ago',
  },
  {
    id: 2,
    title: 'New Message',
    description: 'You have a new message from the Debate Society.',
    time: '5h ago',
  },
  {
    id: 3,
    title: 'Campus Update',
    description: 'Library hours have changed for the holiday.',
    time: '1d ago',
  },
  // Add more notifications as needed
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <ScrollView contentContainerStyle={styles.content}>
        {mockNotifications.map((notif) => (
          <View key={notif.id} style={styles.card}>
            <Text style={styles.title}>{notif.title}</Text>
            <Text style={styles.desc}>{notif.description}</Text>
            <Text style={styles.time}>{notif.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3D0F7',
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2166A5',
    marginLeft: 20,
    marginBottom: 16,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#2166A5',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    color: '#2166A5',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    color: '#2166A5',
    opacity: 0.85,
    marginBottom: 6,
  },
  time: {
    fontSize: 12,
    color: '#2166A5',
    opacity: 0.6,
    textAlign: 'right',
  },
});