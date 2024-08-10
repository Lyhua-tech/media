import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUsers";
const usersSlice = createSlice({
    name: 'user',
    initialState:{
        data: [],
        isLoading : false,
        error: null
    },
    extraReducers(builder) {
        // fetchUsers.pending return users/fetch/pending 
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        // fetchUsers.fulfilled return users/fetch/fulfilled
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        // fetchUsers.rejected return users/fetch/rejected
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload)
        });
        builder.addCase(addUser.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error
        });
    },
})

export const usersReducer = usersSlice.reducer;