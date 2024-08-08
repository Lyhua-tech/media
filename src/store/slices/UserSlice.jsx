import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'user',
    initialState:[],
    reducers: {},
})

export const usersReducer = usersSlice.reducer;