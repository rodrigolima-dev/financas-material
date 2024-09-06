import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { database, ref } from './src/services/firebaseConnection';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';
import Routes from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </AuthProvider>
  );
}

