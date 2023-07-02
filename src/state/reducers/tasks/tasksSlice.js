import moment from 'moment';

import { createSlice } from '@reduxjs/toolkit'

import { createTask, getNextOrder } from '../../../services/task-service';
import { TODO, DOING, DONE } from '../../../constants/task-status';

const initialState = [
  createTask({
    name: "Example - To Do Task",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dueDate: moment().add({ days: 7 }).utc(),
    status: TODO,
    order: 1
  }),

  createTask({
    name: "Example - In Development Task",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dueDate: moment().add({ days: 4 }).utc(),
    status: DOING,
    order: 1
  }),

  createTask({
    name: "Example - Completed Task",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dueDate: moment().add({ days: -5 }).utc(),
    status: DONE,
    order: 1
  }),
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    // Note: Redux Toolit allows us to write mutating logic. See this link for reference: https://react-redux.js.org/tutorials/quick-start
    addTask: (state, action) => {
      const { name, description, dueDate, status } = action.payload;
      const order = getNextOrder(state, status);

      const task = createTask({
        name,
        description,
        dueDate,
        status,
        order
      });

      state.push(task);
    },
    editTask: (state, action) => {
      const { id, name, description, dueDate } = action.payload;

      const index = state.findIndex(task => task.id === id);
      if (index === -1) {
        return;
      }

      const task = state[index];
      task.name = name;
      task.description = description;
      task.dueDate = dueDate;
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;

      const index = state.findIndex(task => task.id === id);
      if (index === -1) {
        return;
      }

      state.splice(index, 1);
    }
  },
})

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;