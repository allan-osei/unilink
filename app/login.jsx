import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo (optional) */}
      <Image
        source={require('../assets/unilink-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#2166A5"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#2166A5"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {/* navigation logic for forgot password */}}>
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation && navigation.navigate('RegisterScreen')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3D0F7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2166A5',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
    color: '#2166A5',
    borderWidth: 1,
    borderColor: '#2166A5',
  },
  button: {
    backgroundColor: '#2166A5',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  link: {
    color: '#2166A5',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});