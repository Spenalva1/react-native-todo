import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDarkMode } from '../providers/darkModeContext';
import GlobalStyle from '../styles/GlobalStyle';
import { Todo } from './Todo';
import TodoItem from './TodoItem';
import TodoListFooter from './TodoListFooter';

interface TodoListProps {
  todos: Todo[],
  clearCompleted: Function,
  deleteTodo: Function,
  toggleTodoCheck: Function,
  activeFilter: 'ALL' | 'ACTIVE' | 'COMPLETED',
}

export default function TodoList({todos, clearCompleted, deleteTodo, toggleTodoCheck, activeFilter}: TodoListProps) {
  const {darkMode} = useDarkMode();

  const todosShow = todos.filter(todo => {
        if (activeFilter === 'ALL') {
          return true;
        }
        if (activeFilter === 'ACTIVE' && !todo.check) {
          return true;
        }
        if (activeFilter === 'COMPLETED' && todo.check) {
          return true;
        }
        return false;
    })

  return (
    <>
      {todos.length > 0 &&
        <View style={[styles.list, darkMode ? styles.listDark : styles.listLight]}>
          {todosShow.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={() => deleteTodo(todo.id)} toggleTodoCheck={() => toggleTodoCheck(todo.id)} />)}
          <TodoListFooter todos={todos} clearCompleted={clearCompleted} />
        </View>
      }
    </>
  )
}

const { colorSet } = GlobalStyle;

const styles = StyleSheet.create({
  list: {
    marginStart: 24,
    marginEnd: 24,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listDark: {
    backgroundColor: colorSet.darkVeryDarkDesaturatedBlue,
  },
  listLight: {
    backgroundColor: '#fff',
  },
})