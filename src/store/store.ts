import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const themePersistConfig = {
  key: "theme",
  storage,
};

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);


export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
