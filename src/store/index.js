import { usersReducer } from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        users : usersReducer,
    }
})

export { store };
export * from './thunks/fetchUsers';
export * from './thunks/addUsers';
export * from './thunks/removeUsers';