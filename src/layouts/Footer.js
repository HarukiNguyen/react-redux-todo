import { useSelector, useDispatch } from "react-redux";
import Filters from "../features/Filters/Filters";
import {
  selectAllTodos,
  clearCompleted,
} from "../features/TodosList/todosSlice";

function Footer() {
  const todos = useSelector(selectAllTodos);
  const todoLength = todos.length;
  const dispatch = useDispatch();
  const suffix = todoLength > 1 ? "s" : "";

  function handleClearCompleted() {
    dispatch(clearCompleted());
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoLength}</strong> item{suffix} left
      </span>
      <Filters />
      <button className="clear-completed" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
