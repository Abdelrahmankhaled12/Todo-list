import { configureStore } from '@reduxjs/toolkit'
import tasks from './tasks'
import filter from './filter'

export const store = configureStore({
    reducer: {
        tasks : tasks,
        filter: filter
    },
})