import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { fontsToUse } from './styles/GlobalStyle';
import { useFonts } from '@expo-google-fonts/josefin-sans';
import { DarkModeProvider } from './providers/darkModeContext';
import Todo from './components/Todo';

export default function App() {
  const [fontLoaded] = useFonts(fontsToUse);
  if(!fontLoaded) return <Text>Loading...</Text>
  return (
    <DarkModeProvider>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Todo />
      </SafeAreaProvider>
    </DarkModeProvider>
  );
}
