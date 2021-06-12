import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useDarkMode } from '../providers/darkModeContext';
import GlobalStyle from '../styles/GlobalStyle';
import { Todo } from './Todo';

interface TodoListFooterProps {
  todos: Todo[],
  clearCompleted: Function,
}

export default function TodoListFooter({todos, clearCompleted}: TodoListFooterProps) {
  const {darkMode} = useDarkMode();
  return (
    <View style={styles.listFooter}>
      <Text style={[styles.footerText, darkMode ? styles.footerTextDark : styles.footerTextLight]}>{itemsLeft(todos)}</Text>
      <Pressable onPress={() => clearCompleted()}>
        <Text style={[styles.footerText, darkMode ? styles.footerTextDark : styles.footerTextLight]}>Clear Completed</Text>
      </Pressable>
    </View>
  )
}

const itemsLeft = (todos: Todo[]): string => {
  const itemsLeft = todos.filter(todo => !todo.check).length;
  if (itemsLeft == 0) {
    return 'No items left';
  }
  if (itemsLeft == 1) {
    return '1 item left';
  }
  return `${itemsLeft} items left`;
}

const { colorSet, fontSet } = GlobalStyle;

const styles = StyleSheet.create({
  listFooter: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontFamily: fontSet.Regular,
  },
  footerTextDark: {
    color: colorSet.darkVeryDarkGrayishBlue
  },
  footerTextLight: {
    color: colorSet.lightDarkGrayishBlue
  }
})
