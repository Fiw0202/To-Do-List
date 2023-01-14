import { useEffect } from 'react';
import './Form.css'

function Form({input , setInput , todos , setTodos , editTodo , setEditTodo}) {

  function onInputChange(e) {
    setInput(e.target.value);
  };

  function onFormSubmit(e){
    e.preventDefault();
      if(!editTodo){
      
      setTodos([...todos,
      {title:input , 
      id: todos.length +1, 
      completed:false}]);
    
      setInput("");
    } 
    else {
      updateTodo(input, editTodo.id , editTodo.completed)
    }
  }
  const updateTodo = (title , id , completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? {title , id , completed} : todo
  )
  setTodos(newTodo)
  setEditTodo("")
}

 useEffect(() => {
  if(editTodo){
    setInput(editTodo.title)
  } 
  else {
    setInput("")
  }
},[setInput , setEditTodo])

  return (
    <div className='form'>
      <h1>Todo-List</h1>
    <form onSubmit={onFormSubmit}>
        <input 
        type='text' 
        placeholder='Add To-Do List' 
        className='task-input'
        value = {input} required
        onChange = {onInputChange} />

        <button type='submit' className='btn-save'>
        {editTodo ? "Edit" : "Save"}
        </button>
    </form>
    </div>
  )
}
Form.displayName = 'Form';
export default Form