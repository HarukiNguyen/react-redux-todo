import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewTodo } from "../features/TodosList/todosSlice";

function Header() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function dispatchTodo(text) {
    dispatch(addNewTodo({ id: nanoid(), text, completed: false }));
    setInputVal("");
  }

  function handleSubmit(e) {
    if (inputVal) {
      const inputTrimmed = inputVal.trim();
      if (e.type === "keydown") {
        if (e.key === "Enter") {
          dispatchTodo(inputTrimmed);
        }
      } else if (e.type === "blur") {
        dispatchTodo(inputTrimmed);
      }
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={handleInputChange}
        onKeyDown={handleSubmit}
        onBlur={handleSubmit}
        value={inputVal}
      />
    </header>
  );
}

export default Header;
