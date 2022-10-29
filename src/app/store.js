import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/TodosList/todosSlice";
import filtersReducer from "../features/Filters/filtersSlice";
import { postData } from "../enhancers/dataPersistance";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
  middleware: [postData],
});
