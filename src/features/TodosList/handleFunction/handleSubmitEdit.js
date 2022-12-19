export default function handleSubmitEdit(
  e,
  editVal,
  handleDispatchEditVal,
  id,
  setIsEditing,
  setEditVal,
  text,
  dispatch,
  removeTodo
) {
  if (e.type === 'keydown') {
    if (editVal) {
      if (e.key === 'Enter') {
        handleDispatchEditVal(id, editVal);
      } else if (e.key === 'Escape') {
        setIsEditing(false);
        setEditVal(text);
      }
    } else {
      if (e.key === 'Enter') {
        dispatch(removeTodo(id));
      } else if (e.key === 'Escape') {
        setEditVal(text);
        setIsEditing(false);
      }
    }
  } else if (e.type === 'blur') {
    if (editVal) {
      handleDispatchEditVal(id, editVal);
    } else {
      setIsEditing(false);
    }
  }
}
