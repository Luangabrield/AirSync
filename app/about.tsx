import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

export default function AboutScreen() {
  const openGitHubProfile = () => {
    Linking.openURL('https://github.com/Luangabrield');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.aboutBox}>
          <Text style={styles.title}>AirSync</Text>
          <Text style={styles.version}>version 1.0</Text>
          <Text style={styles.developedBy}>developed by</Text>
          <Text style={styles.name}>Luan Dierk</Text>
          <TouchableOpacity onPress={openGitHubProfile} style={styles.githubContainer}>
            <Image
              source={{ uri: 'https://avatars.githubusercontent.com/u/112535830?s=400&u=2d0ebe012ba681d18e1f236dd996bb3f3dd9e410&v=4' }} 
              style={styles.avatar}
            />
          </TouchableOpacity>
          <Text style={styles.github}>@Luangabrield</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80A5D6',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  aboutBox: {
    width: '80%',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  version: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  developedBy: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  githubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  github: {
    fontSize: 14,
    color: '#007bff',
  },
});
