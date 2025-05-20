import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';

const App = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPressHamburgerMenu = () => {
    const options = ['Home', 'Settings', 'Logout', 'Cancel'];
    const destructiveButtonIndex = 2; 
    const cancelButtonIndex = 3; 

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          alert('Home selected');
        } else if (buttonIndex === 1) {
          alert('Settings selected');
        } else if (buttonIndex === 2) {
          alert('Logging out...');
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressHamburgerMenu} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text> 
      </TouchableOpacity>
      
      <Text style={styles.title}>App Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  menuText: {
    fontSize: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
