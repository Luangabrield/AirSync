import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, Image, Modal, TouchableOpacity, Button } from 'react-native';
import groupPassengersByCountry from '../services/helpers/groupPassengers';
import { groupPassengersByPassenger } from '../services/helpers/groupPassengersByPassenger';

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
  const passengersWithCountries = groupPassengersByPassenger(passengers);


  const [selectedPassenger, setSelectedPassenger] = useState<{
    passenger_name: string;
    passenger_avatar: string;
    countries: string[];
  } | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePassengerPress = (passengerName: string) => {
    const passenger = passengersWithCountries.find(
      (p) => p.passenger_name === passengerName
    );
    if (passenger) {
      setSelectedPassenger(passenger);
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.frame}>
        <Text style={styles.appTitle}>AirSync</Text>

        <SectionList
          sections={groupedPassengers}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePassengerPress(item.passenger_name)}>
              <View style={styles.passenger}>
                <Image source={{ uri: item.passenger_avatar }} style={styles.avatar} />
                <View>
                  <Text style={styles.passengerName}>{item.passenger_name}</Text>
                  <Text style={styles.passengerDestination}>{item.destination}</Text>
                </View>
              </View>
            </TouchableOpacity>
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

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Países visitados por {selectedPassenger?.passenger_name}
            </Text>
            {selectedPassenger?.countries.map((country, index) => (
              <Text key={index} style={styles.modalText}>
                {country}
              </Text>
            ))}
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
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
  passengerDestination: {
    fontSize: 14,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
});