import React from 'react'
import { Text, View, Pressable, StyleSheet, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { Todo } from "./Todo";
import CheckButton from './CheckButton'
import Cross from './icons/Cross'
import { useDarkMode } from '../providers/darkModeContext';
import GlobalStyle from '../styles/GlobalStyle';

interface TodoItemProps {
  todo: Todo;
  toggleTodoCheck: Function;
  deleteTodo: Function;
}

const mergePressableStyles =  (style?: StyleProp<ViewStyle>, pressStyle?: ViewStyle) => {
  if(!pressStyle) return style;
  if(!style) {
    return ({pressed}: any) => pressed ? pressStyle : undefined
  }  
  return ({pressed}: any) => pressed ? [style, pressStyle] : style;
}

export default function TodoItem({todo, toggleTodoCheck, deleteTodo}: TodoItemProps) {
  const {darkMode} = useDarkMode();
  return (
    <View style={[styles.item, darkMode ? styles.itemDark: styles.itemLight ]}>
      <View style={styles.checkCtn}>
        <CheckButton check={todo.check} toggleCheck={toggleTodoCheck} />
      </View>
      <Text style={[styles.name, darkMode ? styles.nameDark as StyleProp<ViewStyle> : styles.nameLight as StyleProp<ViewStyle>]}>{todo.name}</Text>
      <Pressable style={mergePressableStyles(styles.delete, styles.deletePress)} onPress={() => deleteTodo()}>
        <Cross />
      </Pressable>
    </View>
  )
}

const {colorSet, fontSet} = GlobalStyle;


const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemDark: {
    borderBottomWidth: 1,
    borderBottomColor: colorSet.lightVeryDarkGrayishBlue,    
  },
  itemLight: {
    borderBottomWidth: 1,
    borderBottomColor: colorSet.lightVeryLightGrayishBlue,
  },
  checkCtn: {
    padding: 16,
    paddingEnd: 20    
  },
  name: {
    padding: 12,
    paddingLeft: 0,
    flex: 1,
    fontFamily: fontSet.Regular,
    height: '100%',
    textAlignVertical: 'center',
    fontSize: 18,
  },
  nameLight: {
    color: colorSet.lightVeryDarkGrayishBlue
  },
  nameDark: {
    color: colorSet.darkLightGrayishBlue
  },
  delete: {
    padding: 16
  },
  deletePress: {
    transform: [
      {scale: 0.8}
    ]
  }
})
