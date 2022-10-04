import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

function AppContent() {
  const todoList = useSelector(state => state.todo.todoList)
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  console.log(todoList)
  return (
    (sortedTodoList && sortedTodoList.length > 0) ?
      sortedTodoList.map(todo => (<TodoItem key={todo.id} todo={todo} />))
      :
      <div>
        Not to do
      </div>
  )
}

export default AppContent