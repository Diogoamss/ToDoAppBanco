import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import LoginVerify from '../LoginVerify';

const windowWidth = Dimensions.get('window').width;

export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    await LoginVerify({ login, senha, navigation });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Usuário:</Text>
      <TextInput
        style={styles.input}
        value={login}
        onChangeText={setLogin}
        placeholder="Digite seu usuário"
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 150,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    width: windowWidth * 0.8,
  },
  buttonContainer: {
    backgroundColor: '#83c6f2',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
  },
});
