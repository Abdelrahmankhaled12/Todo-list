import { createSlice } from '@reduxjs/toolkit'

export const filter = createSlice({
    name: 'filter',
    initialState: {
        filter: "all",
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setFilter } = filter.actions

export default filter.reducer