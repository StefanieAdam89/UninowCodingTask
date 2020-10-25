import { AsyncStorage } from 'react-native';

const tokenKey = 'accessToken';
const dummyToken = 'dummy-token';

export async function onLogin() {
  try {
    await AsyncStorage.setItem(tokenKey, dummyToken);
  } catch (error) {
      console.log('Fehler beim Login: ' + error.message);
  } 
}

export async function isLoggedIn(){
  let value;
  try{
    value = await AsyncStorage.getItem(tokenKey);
  } catch (error) {
      console.log('Fehler bei Datenbankabfrage: ' + error.message);
  }
  return value !== null;
}

export async function onLogout({ navigation }) {
  try{
    await AsyncStorage.removeItem(tokenKey);
  } catch (error) {
      console.log('Fehler beim Logout: ' + error.message);
  }
}
