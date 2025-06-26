import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import Login from './Login';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ login, senha, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.taskText}>  User: admin                      Senha: 1234</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Detalhes"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    taskText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
});