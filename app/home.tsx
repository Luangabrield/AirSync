import React from 'react';
import { View, Text, SectionList, StyleSheet, Image } from 'react-native';
import passengers from '../services/data-passengers'; 
import groupPassengersByCountry from '../services/helpers/groupPassengers'; 
import PassengerSectionList from '@/components/PassengerSectionList';

const HomeScreen = () => {
  const groupedPassengers = groupPassengersByCountry(passengers);

  return (
    <View style={styles.container}>
      <PassengerSectionList passengers={passengers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    backgroundColor: '#80A5D6',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  passenger: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  passengerName: {
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;
