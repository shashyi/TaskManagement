import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Services() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      <Text style={styles.description}>Task Scheduling - Plan your tasks ahead of time.</Text>
      <Text style={styles.description}>Reminders & Alerts - Get notified about important tasks.</Text>
      <Text style={styles.description}>Productivity Tracking - Monitor and improve your workflow.</Text>
      <Text style={styles.description}>Cloud Sync - Access tasks from multiple devices.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
});
