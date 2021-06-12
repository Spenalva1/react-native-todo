import React from 'react'
import { Button, Dimensions, Image, StyleSheet, View, FlatList, ListRenderItem } from 'react-native';
import StatusBarSpace from './StatusBarSpace';
import bgLight from '../assets/images/bg-light.jpg';
import bgDark from '../assets/images/bg-dark.jpg';
import Header from './Header';
import { useDarkMode } from '../providers/darkModeContext';
import GlobalStyle from '../styles/GlobalStyle';
import useLocal from '../providers/useLocal';
import Form from './Form';
import TodoItem from './TodoItem';

export interface Todo {
  name: string,
  check: boolean,
  id: any
}

export default function Todo() {
  const {darkMode} = (useDarkMode() as {darkMode: boolean});
  const [todos, setTodos] = (useLocal('TODOS', []) as [Todo[], Function]);
  
  // const renderTodoItem: any = ({ todo }: {todo: Todo}) => (
  //   <TodoItem todo={todo} />
  // );

  const newTodo = (name:string, check = false) => {
    setTodos([...todos, {name, check, id: new Date().valueOf()}])
  }

  const toggleTodoCheck = (id: any) => {
    setTodos(todos.map(todo => todo.id === id ? ({...todo, check: !todo.check}) : todo ))
  }

  const deleteTodo = (id: any) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.check));
  }
  
  
  return (
    <View style={{flex: 1, backgroundColor: darkMode ? colorSet.darkVeryDarkBlue : colorSet.lightVeryLightGray}}>
      <Image source={darkMode ? bgDark : bgLight} style={styles.bgImage}/>
      <StatusBarSpace />
      <Header />
      <Form newTodo={newTodo} />
      <View>
        <FlatList 
        style={[styles.list, darkMode ? styles.listDark : styles.listLight]}
        data={todos} 
        renderItem={({item}) => <TodoItem todo={item} />} 
        keyExtractor={todo => todo.id} />
      </View>
    </View>
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
  container: {
    backgroundColor: 'blue',
    zIndex: 1,
  },
  text: {
    backgroundColor: 'red',
    color: '#000',
  },
  list: {
    paddingStart: 24,
    paddingEnd: 24,
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
    backgroundColor: colorSet.darkVeryDarkDesaturatedBlue
  },
  listLight: {
    backgroundColor: '#fff'
  },
});
