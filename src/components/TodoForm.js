import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);
        setValue("")
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text" className='todoInput' value={value}placeholder='what is the task today?'onChange={(e) => setValue (e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm