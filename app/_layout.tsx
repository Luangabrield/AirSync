import React from 'react';
import { Stack, router, useNavigation } from 'expo-router';
import { CommonActions, useNavigationState} from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ActionSheetProvider, useActionSheet } from '@expo/react-native-action-sheet';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
  return (
    <ActionSheetProvider>
      <AppLayout />
    </ActionSheetProvider>
  );
}

const AppLayout = () => {
  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();
  const rotas = useNavigationState((state) => state.routeNames);
  const currentIndex = useNavigationState((state) => state.index);

  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0, 
        routes: [{ name: 'index' }],
      })
  
    );
  
  };

  console.log(rotas)
  console.log(currentIndex)
  const openMenu = () => {
    let options = ['About', 'Logout', 'Cancel'];
    let cancelButtonIndex = 2; 
    let destructiveButtonIndex = 1; 

    if(currentIndex == 2){
      options = ['Logout', 'Cancel'];
      cancelButtonIndex = 1;
      destructiveButtonIndex = 0;
    }

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          router.push('/about');
        } else if (buttonIndex === 1) {
          handleLogout();
        }
      }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#406DA8' },
          headerTintColor: '#333',
          headerTitleStyle: { fontWeight: 'bold', color: 'white' },
          headerRight: () => (
            <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
              <Ionicons name="menu" size={24} color="white" /> 
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    padding: 10,
  },
});
