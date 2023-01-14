import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TodoList.css'


library.add(fas)

function TodoList({todos , setTodos , setEditTodo}){

  //Check Function
  function handleComplete(todo){
    setTodos(
      todos.map((item) =>{
        if(item.id === todo.id) {
          return{...item, completed: !item.completed};
        }
        return item;
      })
    )
  }

  // Delete Function
  function handleDelete({id}){
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Edit Function
  function handleEdit({id}){
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo);
  }


  return (
    <div className='todo-list'>

      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input type='text' 
                 value={todo.title} 
                 className={`list ${todo.completed ? "completed " : ""}`} 
                 onChange={(e) =>  e.preventDefault()} />
       

<div className='button'>
          <button className='btn-complete'>
            <FontAwesomeIcon icon="fa fa-check-circle" onClick={() => handleComplete(todo)}/>
          </button>
          <button onClick={() => handleEdit(todo)}>Edit
          </button>
          <button onClick={() => handleDelete(todo)}>Delete
          </button>
          </div>

      </li>
    ))}

    </div>

  )
}
TodoList.displayName = 'TodoList';
export default TodoList