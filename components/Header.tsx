import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Moon from './icons/Moon';
import Sun from './icons/Sun';
import CheckGradient from './icons/CheckGradient';
import GlobalStyles from '../styles/GlobalStyle';
import { useDarkMode } from '../providers/darkModeContext';

export default function Header() {
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TODO</Text>
      {/* <CheckGradient onPress={() => toggleDarkMode()} style={styles.icon}/> */}
      {darkMode 
        ? <Sun onPress={() => toggleDarkMode()} style={styles.icon}/>
        : <Moon onPress={() => toggleDarkMode()} style={styles.icon}/>
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24
  },
  title: {
    fontSize: 32,
    fontFamily: GlobalStyles.fontSet.Bold,
    letterSpacing: 5,
    color: '#ffffff',
  },
  icon: {
    position: 'relative'
  }
})
