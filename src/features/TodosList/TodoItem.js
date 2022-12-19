import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import handleEdit from './handleFunction/handleEdit';
import handleToggle from './handleFunction/handleToggle';
import TodoItemInput from './TodoItemInput';
import { removeTodo, saveEditedTodo, toggleTodo } from './todosSlice';

function TodoItem({ id, completed, text }) {
  const editInput = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editVal, setEditVal] = useState(text);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEditing) {
      editInput.current.focus();
    }
  }, [isEditing]);

  function handleDispatchEditVal(id, editVal) {
    setIsEditing(false);
    dispatch(saveEditedTodo({ id: id, text: editVal }));
  }

  const todoItemInputProps = {
    editInput,
    setEditVal,
    editVal,
    handleDispatchEditVal,
    id,
    setIsEditing,
    text,
    dispatch,
    removeTodo,
  };

  return (
    <li
      className={`${completed ? 'completed' : ''} ${
        isEditing ? 'editing' : ''
      }`}
    >
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={completed}
          onChange={() => handleToggle(id, dispatch, toggleTodo)}
        />
        <label onDoubleClick={() => handleEdit(setIsEditing)}>{text}</label>
        <button
          className='destroy'
          onClick={() => {
            dispatch(removeTodo(id));
          }}
        ></button>
      </div>
      <TodoItemInput todoItemInputProps={todoItemInputProps} />
    </li>
  );
}

export default TodoItem;
