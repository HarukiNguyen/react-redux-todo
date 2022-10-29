import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { selectFilterStatus } from "../Filters/filtersSlice";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodo: todosAdapter.addOne,
    toggleTodo(state, action) {
      const id = action.payload;
      const todo = state.entities[id];
      todo.completed = !todo.completed;
    },
    saveEditedTodo(state, action) {
      const { id, text } = action.payload;
      const todo = state.entities[id];
      todo.text = text;
    },
    removeTodo: todosAdapter.removeOne,
    markAllCompleted(state) {
      Object.values(state.entities).forEach((todo) => {
        todo.completed = true;
      });
    },
    markAllNotCompleted(state) {
      Object.values(state.entities).forEach((todo) => {
        todo.completed = false;
      });
    },
    clearCompleted(state) {
      const completedIds = Object.values(state.entities)
        .filter((todo) => todo.completed)
        .map((todo) => todo.id);

      todosAdapter.removeMany(state, completedIds);
    },
  },
});

export const { selectAll: selectAllTodos } = todosAdapter.getSelectors(
  (state) => state.todos
);

export const selectCompletedTodos = createSelector(selectAllTodos, (todos) => {
  return todos.filter((todo) => todo.completed);
});

export const selectFilteredTodos = createSelector(
  selectAllTodos,
  selectFilterStatus,
  (todos, status) => {
    if (todos.length > 0) {
      if (status === "all") {
        return todos;
      } else if (status === "active") {
        return todos.filter((todo) => !todo.completed);
      } else {
        return todos.filter((todo) => todo.completed);
      }
    }
  }
);

export const {
  addNewTodo,
  toggleTodo,
  saveEditedTodo,
  removeTodo,
  markAllCompleted,
  markAllNotCompleted,
  clearCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
