import { usersReducer } from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";

const store = configureStore({
    reducer:{
        users : usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
    },
    middleware: (getDefaulMiddleWare) => {
        return getDefaulMiddleWare()
            .concat(albumsApi.middleware)
    }
})

setupListeners(store.dispatch)

export { store };
export * from './thunks/fetchUsers';
export * from './thunks/addUsers';
export * from './thunks/removeUsers';
export {useFetchAlbumsQuery} from './apis/albumsApi'