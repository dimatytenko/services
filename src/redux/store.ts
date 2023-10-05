import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { zoomReducers } from "./zoom";
import { categoriesReducer } from "./categories";

//* config zoom persist
const zoomPersistConfig = {
  key: "zoom",
  storage,
};

//* config categories persist
const categoriesPersistConfig = {
  key: "categories",
  storage,
};

export const store = configureStore({
  reducer: {
    zoom: persistReducer(zoomPersistConfig, zoomReducers.zoom),
    categories: persistReducer(
      categoriesPersistConfig,
      categoriesReducer.categories
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
