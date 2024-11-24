import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet'; // Ou 'react-native-action-sheet' para React Native CLI

const App = () => {
  // UseActionSheet Hook fornece a funcionalidade do ActionSheet
  const { showActionSheetWithOptions } = useActionSheet();

  // Função que será chamada ao pressionar o botão
  const onPressHamburgerMenu = () => {
    // Definir as opções do menu
    const options = ['Home', 'Settings', 'Logout', 'Cancel'];
    const destructiveButtonIndex = 2; // "Logout" será destacado como a opção perigosa
    const cancelButtonIndex = 3; // "Cancel" é a opção de cancelar

    // Exibir o ActionSheet
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
      {/* Botão Hamburger */}
      <TouchableOpacity onPress={onPressHamburgerMenu} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text> {/* Símbolo do menu sanduíche */}
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
