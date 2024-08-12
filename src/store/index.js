import { usersReducer } from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

const store = configureStore({
    reducer:{
        users : usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware: (getDefaulMiddleWare) => {
        return getDefaulMiddleWare()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware);
    }
})

setupListeners(store.dispatch)

export { store };
export * from './thunks/fetchUsers';
export * from './thunks/addUsers';
export * from './thunks/removeUsers';
export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
} from './apis/albumsApi'
export {
    useFetchPhotosQuery,
    useDeletePhotoMutation,
    useAddPhotoMutation
} from './apis/photosApi';