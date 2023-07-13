import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button';
import Input from './components/UI/Input';
import { products } from './utils/constants';
import TodoItem from './components/TodoItem';

function App() {


  const [todo, setTodo] = useState(products)
  const [inputValue, setInputValue] = useState("");

  function getInputValue(e) {
    setInputValue(e.target.value);
  }
 
  function deleteTodoById(id) {
    const filteredArray = todo.filter((item) => item.id !== id)
    setTodo(filteredArray)
  }
  function addTheNewTodo() {
    if(inputValue) {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        title: inputValue
      }
      setTodo([...todo, newTodo])
      console.log(todo);
    }
  }

  return (
    <div className="App">
      <Input inputType="text" onChange={getInputValue} />
      <Button title="add" onClick={addTheNewTodo}/>
      {
        todo.map((item) => {
          return (
            <TodoItem deleteTodoById={deleteTodoById} item={item}/>
          )
        })
      }
    </div>
  );
}

export default App;
