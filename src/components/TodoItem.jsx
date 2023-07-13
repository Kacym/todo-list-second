import React from 'react'
import Button from './UI/Button'

const TodoItem = ({item, deleteTodoById}) => {
  return (
    <div key={item.id}>
        <span>{item.title}</span>
        <Button title="delete" onClick={() => {
            deleteTodoById(item.id)
        }}/>
    </div>
  )
}

export default TodoItem