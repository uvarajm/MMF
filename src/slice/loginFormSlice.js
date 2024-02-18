import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = loginSlice.actions;

export default loginSlice.reducer;