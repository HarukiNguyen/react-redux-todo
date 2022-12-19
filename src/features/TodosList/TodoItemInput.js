import handleEditChange from './handleFunction/handleEditChange';
import handleSubmitEdit from './handleFunction/handleSubmitEdit';

function TodoItemInput({ todoItemInputProps }) {
  const {
    editInput,
    setEditVal,
    editVal,
    handleDispatchEditVal,
    id,
    setIsEditing,
    text,
    dispatch,
    removeTodo,
  } = todoItemInputProps;

  return (
    <input
      ref={editInput}
      className='edit'
      onChange={e => handleEditChange(e, setEditVal)}
      onBlur={e =>
        handleSubmitEdit(
          e,
          editVal,
          handleDispatchEditVal,
          id,
          setIsEditing,
          setEditVal,
          text,
          dispatch,
          removeTodo
        )
      }
      onKeyDown={e =>
        handleSubmitEdit(
          e,
          editVal,
          handleDispatchEditVal,
          id,
          setIsEditing,
          setEditVal,
          text,
          dispatch,
          removeTodo
        )
      }
      value={editVal}
      type='text'
    />
  );
}

export default TodoItemInput;
