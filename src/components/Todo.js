// import { ReactDOM } from "react";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Todo = ({task, toggleComplete}) => {
  return (
    <div className="todo">
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
      <div className="icons">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};

export default Todo;
