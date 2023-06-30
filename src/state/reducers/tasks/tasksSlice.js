import moment from 'moment';

import { createSlice } from '@reduxjs/toolkit'

import { createTask, getNextOrder } from '../../../services/task-service';
import { TODO } from '../../../constants/task-status';

const initialState = [
  createTask({
    name: "Sample To Do Task",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dueDate: moment().add({ days: 7 }).toDate(),
    status: TODO,
    order: 1
  })
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const { name, description, dueDate, status } = action.payload;
      const order = getNextOrder(state.notes);

      const task = createTask({
        name,
        description,
        dueDate,
        status,
        order
      });

      state.tasks.push(task);
    }
  },
})

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;