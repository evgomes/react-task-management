import { configureStore } from '@reduxjs/toolkit'
import { tasksSlice } from './reducers/tasks/tasksSlice'

export default configureStore({
    reducer: {
        tasks: tasksSlice
    },
})