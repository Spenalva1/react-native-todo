import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import GlobalStyles from '../styles/GlobalStyle';
import CheckGradient from './icons/CheckGradient';
import { useDarkMode } from '../providers/darkModeContext';
import GlobalStyle from '../styles/GlobalStyle';
import Check from './icons/Check';

export default function Form() {
  const {darkMode, toggleDarkMode} = useDarkMode();
  const [name, setName] = useState<String>('');
  const [check, setCheck] = useState<boolean>(false);
  
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Pressable style={styles.checkButton} onPress={() => setCheck(prev => !prev)}>
          {check && <CheckGradient />}
          {check && <Check style={styles.check} />}
        </Pressable>
        <TextInput onChangeText={(value) => setName(value)} placeholder="Create a new todo..." style={styles.input}></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  checkButton: {
    width: 30,
    height: 30,
    marginRight: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  check: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [
      {
        translateY: -4.5,
      }, {
        translateX: -4.5,
      },
      {
        scale: 1.3
      }
    ]
  },
  input: {
    flex: 1,
    fontFamily: GlobalStyle.fontSet.Regular
  }
})
