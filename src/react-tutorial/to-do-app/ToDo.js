import React from "react";
import { useState } from "react";

function ToDo() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function addTodo() {
    if (inputText.trim() !== "") {
      // spread the existing todoList and add the new inputText
      setTodoList([...todoList, inputText]);
    }
  }

  function deleteTask(task) {
    const newToDoList = todoList.filter((todo) => {
      // This loops over the todo arr and check if the passed task is equal to the todo
      // If it is equal, it returns false, which means it will not be included in
      if (todo === task) {
        return false;
      } else {
        return true;
      }
    });

    setTodoList(newToDoList);
  }

  return (
    <div>
      <h1>To Do App</h1>
      <div className="AddTask">
        <input onChange={handleInputChange} />
        <button onClick={addTodo}>Add To-Do</button>
      </div>

      <div className="List">
        {todoList.map((todo) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <h4>{todo}</h4>
              <button on onClick={() => deleteTask(todo)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDo;
