import TodosList from "../features/TodosList/TodosList";
import {
  markAllCompleted,
  markAllNotCompleted,
  selectCompletedTodos,
  selectAllTodos,
} from "../features/TodosList/todosSlice";
import { useDispatch, useSelector } from "react-redux";

function Content() {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const completedTodos = useSelector(selectCompletedTodos);
  const todoLength = todos.length;
  const completedTodosLength = completedTodos.length;

  function handleToggleAllCompleted() {
    if (todoLength === completedTodosLength) {
      dispatch(markAllNotCompleted());
    } else {
      dispatch(markAllCompleted());
    }
  }

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={handleToggleAllCompleted}>
        Mark all as complete
      </label>
      <TodosList />
    </section>
  );
}

export default Content;
