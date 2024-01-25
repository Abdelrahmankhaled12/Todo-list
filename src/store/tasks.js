import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        addTask: (state, action) => {
            state.tasks = [action.payload, ...state.tasks];
        },
        complateTask: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload) 
                    task.status = "complete"
                return task
            });;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTasks, removeTask, addTask, complateTask } = tasks.actions

export default tasks.reducer