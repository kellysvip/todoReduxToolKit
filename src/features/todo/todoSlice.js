import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filter: "SHOW_ALL",
};

let nextTodoId = 0

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nextTodoId++,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return { ...todo, completed: !todo.completed };
      });
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer
