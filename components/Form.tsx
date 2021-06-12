import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import GlobalStyles from '../styles/GlobalStyle';
import { useDarkMode } from '../providers/darkModeContext';
import CheckButton from './CheckButton'

interface FormProps {
  newTodo: (name: string, check?: boolean) => void;
}

export default function Form({newTodo}: FormProps) {
  const {darkMode} = useDarkMode();
  const [name, setName] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);
  
  const onSubmitEditing = () => {
    if(name.length < 1) return;
    newTodo(name, check);
    setName('');
    setCheck(false);
  }
  
  return (
    <View style={styles.container}>
      <View style={[styles.form, darkMode ? styles.formDark : styles.formLight]}>
        <CheckButton check={check} toggleCheck={() => setCheck(check => !check)} />
        <TextInput 
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
  input: {
    flex: 1,
    fontFamily: fontSet.Regular,
    fontSize: 16,
    marginLeft: 20
  },
  inputLight: {
    color: colorSet.lightVeryDarkGrayishBlue
  },
  inputDark: {
    color: colorSet.darkLightGrayishBlue
  },
})
