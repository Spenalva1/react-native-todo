import React from 'react'
import { ScrollView, Dimensions, Image, StyleSheet } from 'react-native';
import StatusBarSpace from './StatusBarSpace';
import bgLight from '../assets/images/bg-light.jpg';
import bgDark from '../assets/images/bg-dark.jpg';
import Header from './Header';
import { useDarkMode } from '../providers/darkModeContext';
import GlobalStyle from '../styles/GlobalStyle';
import useLocal from '../providers/useLocal';
import Form from './Form';
import TodoList from './TodoList';

export interface Todo {
  name: string,
  check: boolean,
  id: string
}

export default function Todo() {
  const {darkMode} = (useDarkMode() as {darkMode: boolean});
  const [todos, setTodos] = (useLocal('TODOS', []) as [Todo[], Function]);

  const newTodo = (name:string, check = false) => {
    setTodos([...todos, {name, check, id: new Date().valueOf().toString()}]);
  }

  const toggleTodoCheck = (id: any) => {
    setTodos(todos.map(todo => todo.id === id ? ({...todo, check: !todo.check}) : todo ));
  }

  const deleteTodo = (id: any) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.check));
  }
  
  
  return (
    <ScrollView style={{flex: 1, paddingBottom: 24, backgroundColor: darkMode ? colorSet.darkVeryDarkBlue : colorSet.lightVeryLightGray}}>
      <Image source={darkMode ? bgDark : bgLight} style={styles.bgImage}/>
      <StatusBarSpace />
      <Header />
      <Form newTodo={newTodo} />
      <TodoList 
        todos={todos} 
        clearCompleted={clearCompleted}
        deleteTodo={deleteTodo}
        toggleTodoCheck={toggleTodoCheck}
      />
    </ScrollView>
  )
}

const width = Dimensions.get('window').width;

const { colorSet } = GlobalStyle;

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    width,
    zIndex: 0,
    top: 0,
    left: 0,
  },
});
