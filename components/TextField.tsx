import React from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';

type FormInputProps = {
  label?: string; 
  error?: string; 
} & TextInputProps;

export default function TextField({ label, error, ...rest }: FormInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={[styles.input, error ? styles.inputError : null]} {...rest} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
