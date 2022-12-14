import { useSelector } from "react-redux";
import { selectFilteredTodos } from "./todosSlice";
import TodoItem from "./TodoItem";

function TodosList() {
  const todos = useSelector(selectFilteredTodos);
  const todosList = Object.values(todos).map((todo) => {
    const { id, completed, text } = todo;
    return <TodoItem key={id} id={id} completed={completed} text={text} />;
  });

  return <ul className="todo-list">{todosList}</ul>;
}

export default TodosList;
