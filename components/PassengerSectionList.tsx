import React from 'react';
import { View, Text, SectionList, StyleSheet, Image } from 'react-native';
import groupPassengersByCountry from '../services/helpers/groupPassengers';

export type Passenger = {
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
};

type PassengerSectionListProps = {
  passengers: Passenger[];
};

export default function PassengerSectionList({ passengers }: PassengerSectionListProps) {
  const groupedPassengers = groupPassengersByCountry(passengers);

  return (
    <View style={styles.screen}>
      <View style={styles.frame}>
        <Text style={styles.appTitle}>AirSync</Text>

        <SectionList
          sections={groupedPassengers}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <View style={styles.passenger}>
              <Image source={{ uri: item.passenger_avatar }} style={styles.avatar} />
              <Text style={styles.passengerName}>{item.passenger_name}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.categoryTitle}>{title}</Text>
            </View>
          )}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#80A5D6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
  },
  sectionHeader: {
    backgroundColor: '#80A5D6',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  passenger: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  passengerName: {
    fontSize: 16,
    color: '#333',
  },
});
