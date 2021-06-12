import React from 'react'
import { Text } from 'react-native';
import { Todo } from "./Todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({todo}: TodoItemProps) {
  return (
    <Text>{todo.name}</Text>
  )
}
