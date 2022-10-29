import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/TodosList/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer
  },
});
