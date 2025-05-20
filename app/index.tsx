import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const CadastroForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidLogin, setIsValidLogin] = useState(false);

  const handleRegister = () => {
    if (isValidLogin) {
      router.push('/home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos!');
    }
  };

  useEffect(() => {
    if (username === 'luan' && password === '12344') {
      setIsValidLogin(true);
    } else {
      setIsValidLogin(false);
    }
  }, [username, password]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.image}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#004AAD',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 200, 
    height: 200,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroForm;
