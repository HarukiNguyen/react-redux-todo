import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

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
  },
});

export const { selectAll: selectAllTodos } = todosAdapter.getSelectors(
  (state) => state.todos
);

export const selectCompletedTodos = createSelector(selectAllTodos, (todos) => {
  return todos.filter((todo) => todo.completed);
});

export const {
  addNewTodo,
  toggleTodo,
  saveEditedTodo,
  removeTodo,
  markAllCompleted,
  markAllNotCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
