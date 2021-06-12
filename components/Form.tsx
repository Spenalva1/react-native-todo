import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import GlobalStyles from '../styles/GlobalStyle';
import CheckGradient from './icons/CheckGradient';
import { useDarkMode } from '../providers/darkModeContext';
import Check from './icons/Check';
import { useRef } from 'react';

interface FormProps {
  newTodo: (name: string, check?: boolean) => void;
}

export default function Form({newTodo}: FormProps) {
  const {darkMode} = useDarkMode();
  const [name, setName] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);
  const input = useRef(null);
  
  const onSubmitEditing = () => {
    if(name.length < 1) return;
    newTodo(name, check);
    setName('');
    setCheck(false);
  }
  
  return (
    <View style={styles.container}>
      <View style={[styles.form, darkMode ? styles.formDark : styles.formLight]}>
        <Pressable style={styles.checkButton} onPress={() => setCheck(prev => !prev)}>
          {check && <CheckGradient />}
          {check && <Check style={styles.check} />}
        </Pressable>
        <TextInput 
        ref={input}
        value={name}
        onChangeText={(text) => setName(text)} 
        blurOnSubmit={false}
        onSubmitEditing={onSubmitEditing}
        placeholder="Create a new todo..." 
        placeholderTextColor={darkMode ? GlobalStyles.colorSet.darkLightGrayishBlue : GlobalStyles.colorSet.lightVeryDarkGrayishBlue} 
        style={[styles.input, darkMode ? styles.inputDark : styles.inputLight]} />
      </View>
    </View>
  )
}

const {colorSet, fontSet} = GlobalStyles;

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
  formLight: {
    backgroundColor: '#fff'
  },
  formDark: {
    backgroundColor: colorSet.darkVeryDarkDesaturatedBlue
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
    fontFamily: fontSet.Regular,
    fontSize: 16
  },
  inputLight: {
    color: colorSet.lightVeryDarkGrayishBlue
  },
  inputDark: {
    color: colorSet.darkLightGrayishBlue
  },
})
