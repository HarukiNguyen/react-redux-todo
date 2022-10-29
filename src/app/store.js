import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/TodosList/todosSlice";
import filtersReducer from "../features/Filters/filtersSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});
