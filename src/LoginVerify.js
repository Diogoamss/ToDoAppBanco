import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function LoginVerify({ login, senha, navigation }) {
  try {
    if (login === "admin" && senha === "1234") {
      await AsyncStorage.setItem('user', JSON.stringify({ login }));
      navigation.replace('Home');
    } else {
      alert('Usuário ou senha incorretos');
    }
  } catch (error) {
    alert('Erro ao verificar login');
    console.error(error);
  }
}
