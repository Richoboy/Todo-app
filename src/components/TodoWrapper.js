import React, { useState } from "react";
import { v4 as uuid } from "uuid";
// import {Todo} from "./Todo";
import TodoForm from "./TodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuid(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  }

  // const toggleComplete = id => {
  //   setTodos{todos.map(todo => todo.id === id ? {
  //     ...todo, completed: !todo.completed} : todo 
  //   )}
  // }
  return (
    <div className="todoWrapper">
      <h1>GET THINGS DONE!</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todoList">
        {todos.map((todo, index) => {
          // return <Todo task={todo} key={index} toggleComplete={toggleComplete}/>;
        })}
      </div>
    </div>
  );
};

export default TodoWrapper;
