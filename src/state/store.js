import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux"
import thunk from 'redux-thunk'
import tasksSlice from './reducers/tasks/tasksSlice'

const reducers = combineReducers({
    tasks: tasksSlice,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});