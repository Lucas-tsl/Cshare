import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function RegisterWidget() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    console.log('Mot de passe oublié ?');
  };

  const handleSignIn = () => {
    console.log('Connexion');
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/Logo_Chevrollier.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          // source={require('./assets/images/Cpartage.jpeg')}
          style={styles.image}
        />
      </View>
      <Text style={styles.label}>Utilisateur :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrer votre nom d'utilisateur..."
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Mot de passe :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrer votre mot de passe..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Connexion</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginTop: 20,
  },
  logo: {
    width: 306,
    height: 99,
    resizeMode: 'cover',
  },
  imageContainer: {
    marginTop: 20,
  },
  image: {
    width: 246,
    height: 193,
    resizeMode: 'cover',
    opacity: 0.7,
  },
  label: {
    fontFamily: 'Readex Pro',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  forgotPassword: {
    fontFamily: 'Readex Pro',
    fontSize: 16,
    color: '#B78D8E',
    marginTop: 10,
  },
  signInButton: {
    backgroundColor: '#B78D8E',
    width: '80%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonText: {
    fontFamily: 'Readex Pro',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
