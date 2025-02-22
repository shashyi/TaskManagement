import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Settings() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.description}>Adjust your app preferences.</Text>
      <Text style={styles.description}>Manage notifications, themes, and security settings.</Text>
      <Text style={styles.description}>Set up integrations and customize the experience.</Text>
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
