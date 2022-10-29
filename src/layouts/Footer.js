import { useSelector } from "react-redux";
import Filters from "../features/Filters/Filters";
import { selectAllTodos } from "../features/TodosList/todosSlice";

function Footer() {
  const todos = useSelector(selectAllTodos);
  const todoLength = todos.length;

  const suffix = todoLength > 1 ? "s" : "";

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoLength}</strong> item{suffix} left
      </span>
      <Filters />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
