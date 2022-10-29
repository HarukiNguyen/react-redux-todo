import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "./todosSlice";
import { useState } from "react";
import { saveEditedTodo, removeTodo } from "./todosSlice";

function TodoItem({ id, completed, text }) {
  const editInput = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editVal, setEditVal] = useState(text);
  const dispatch = useDispatch();
  function handleToggle(id) {
    dispatch(toggleTodo(id));
  }

  useEffect(() => {
    if (isEditing) {
      editInput.current.focus();
    }
  }, [isEditing]);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleEditChange(e) {
    setEditVal(e.target.value);
  }

  function handleDispatchEditVal(id, editVal) {
    setIsEditing(false);
    dispatch(saveEditedTodo({ id: id, text: editVal }));
  }

  function handleSubmitEdit(e) {
    if (e.type === "keydown") {
      if (editVal) {
        if (e.key === "Enter") {
          handleDispatchEditVal(id, editVal);
        } else if (e.key === "Escape") {
          setIsEditing(false);
          setEditVal(text);
        }
      } else {
        if (e.key === "Enter") {
          dispatch(removeTodo(id));
        } else if (e.key === "Escape") {
          setEditVal(text);
          setIsEditing(false);
        }
      }
    } else if (e.type === "blur") {
      if (editVal) {
        handleDispatchEditVal(id, editVal);
      } else {
        setIsEditing(false);
      }
    }
  }

  return (
    <li
      className={`${completed ? "completed" : ""} ${
        isEditing ? "editing" : ""
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => handleToggle(id)}
        />
        <label onDoubleClick={handleEdit}>{text}</label>
        <button
          className="destroy"
          onClick={() => {
            dispatch(removeTodo(id));
          }}
        ></button>
      </div>
      <input
        ref={editInput}
        className="edit"
        onChange={handleEditChange}
        onBlur={handleSubmitEdit}
        onKeyDown={handleSubmitEdit}
        value={editVal}
        type="text"
      />
    </li>
  );
}

export default TodoItem;
